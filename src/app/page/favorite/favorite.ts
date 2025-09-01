import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/detail';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../../store/list/list.selectors';
import { CharacterComponent } from '../../component/character/character';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CharacterComponent, AsyncPipe, CommonModule],
  templateUrl: './favorite.html',
  styleUrl: './favorite.css',
})
export class Favorite implements OnInit {
  store = inject(Store);
  emptyFlag: boolean = true;
  favorites$: Observable<Character[]> = this.store.select(selectFavorites);
  ngOnInit(): void {
    this.favorites$.subscribe((favorites: Character[]) => {
      this.emptyFlag = favorites.length == 0;
    });
  }
}
