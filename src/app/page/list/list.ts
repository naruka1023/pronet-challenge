import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectError,
  selectList,
  selectLoading,
  selectPage,
} from '../../store/list/list.selectors';
import { map, Observable, startWith, switchMap, BehaviorSubject } from 'rxjs';
import { Character } from '../../models/detail';
import { scrollEvent } from '../../store/list/list.actions';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterComponent } from '../../component/character/character';
import { Skeleton } from '../../component/skeleton/skeleton';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    CharacterComponent,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    Skeleton,
  ],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit, OnDestroy {
  private store = inject(Store);
  error$ = this.store.select(selectError);
  loading$: Observable<boolean> = this.store.select(selectLoading);
  searchTerm = new FormControl('');
  emptyFlag: boolean = true;
  list$: Observable<Character[]> = this.store.select(selectList);
  filteredItems$!: Observable<Character[]>;
  filter$ = new BehaviorSubject<string>('');
  ngOnInit(): void {
    this.filteredItems$ = this.filter$.pipe(
      startWith(''),
      switchMap((filterValue) =>
        this.list$.pipe(
          map((items: Character[]) =>
            items.filter(
              (item: Character) =>
                item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
                item.culture.toLowerCase().includes(filterValue.toLowerCase())
            )
          )
        )
      )
    );
    this.list$.subscribe((list) => {
      this.emptyFlag = list.length == 0;
    });
  }

  ngOnDestroy(): void {
    this.filter$.unsubscribe();
  }

  clearFilter(): void {
    this.filter$.next('');
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      this.store.dispatch(scrollEvent());
    }
  }
}
