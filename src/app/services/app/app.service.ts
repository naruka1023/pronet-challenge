import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/detail';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = 'https://anapioficeandfire.com/api/characters';

  private http = inject(HttpClient);

  getCharacters(page: number, limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }
  getCharacterID(character: Character) {
    return Number(character.url.split('/')[character.url.split('/').length - 1]) - 1;
  }
}
