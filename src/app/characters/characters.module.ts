import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersRouteModule } from './characters-routing.module';
import { CharacterComponent } from './character/character.component';



@NgModule({
  declarations: [
    CharactersListComponent, 
    CharacterComponent],
  imports: [
    CommonModule,
    CharactersRouteModule
  ],
  exports: [CharactersListComponent]
})
export class CharactersModule { }
