import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';



const routes: Routes = [
    {
        path: '',
        component: CharactersComponent,
        children: [
            { path: ':id', component: CharactersListComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersRouteModule { }