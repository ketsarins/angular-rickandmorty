import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersComponent } from './characters.component';
import { CharactersRouteModule } from './characters-routing.module';



@NgModule({
  declarations: [
    CharactersComponent, 
    CharactersListComponent],
  imports: [
    CommonModule,
    CharactersRouteModule
  ],
  exports: [CharactersListComponent]
})
export class CharactersModule { }
