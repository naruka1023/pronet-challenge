import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { Character } from '../../models/detail';
import { EmptyPipe } from '../../pipe/empty-pipe';
import { createFavorite, deleteFavorite } from '../../store/list/list.actions';
import { AppService } from '../../services/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { favoriteFlag } from '../../store/list/list.selectors';

@Component({
  selector: 'app-character',
  imports: [EmptyPipe, CommonModule],
  standalone: true,
  templateUrl: './character.html',
  styleUrl: './character.css',
  host: {
    class: 'col-xl-3 col-lg-4 col-sm-6 col',
  },
})
export class CharacterComponent implements OnInit {
  private router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  appService = inject(AppService);
  store = inject(Store);
  favorite$!: Observable<boolean>;
  favorite: boolean = true;
  item: InputSignal<Character> = input.required<Character>();
  id: number = 0;
  isDashboard: boolean = true;
  loaded: boolean = false;
  isFavoritePage: boolean = true;

  ngOnInit(): void {
    this.id = this.appService.getCharacterID(this.item());
    this.favorite$ = this.store.select(favoriteFlag(this.id));
    this.isFavoritePage = this.router.url.includes('/favorite');
    this.isDashboard = this.router.url.includes('/dashboard');
    this.favorite$.subscribe((value) => {
      this.favorite = value;
    });
  }

  goToDetail() {
    this.router.navigate(['detail', this.id], { relativeTo: this.activatedRoute.parent });
  }
  toggleFavorite() {
    if (this.favorite) {
      this.store.dispatch(deleteFavorite({ index: this.id }));
    } else {
      this.store.dispatch(createFavorite({ index: this.id }));
    }
  }
}
