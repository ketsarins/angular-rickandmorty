import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { CharacterResult } from '../characters/shared/character-result.model';
import { Character } from '../characters/shared/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharatersService {

  constructor(private http: HttpClient) { }
  /**
   * GET list of characters // TODO:: Config url in one place
   */
  getCharacters(): Observable<Character[]> {
    return this.http.get<CharacterResult>('https://rickandmortyapi.com/api/character',)
    .pipe(
      tap(res => console.log('Observable getCharacters()', res)),
      map(res => res.results), // TODO:: Implement pagination, for now GET only first 20 results
      catchError((err, caught) => caught) // TODO:: Handle the error
    );
  }
}
