import { Component, OnInit } from '@angular/core';
import { CharatersService } from 'src/app/services/charaters.service';
import { Character } from '../shared/character.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html'
})
export class CharactersListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharatersService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(res => {
      this.characters = res;
    })
  }

}
