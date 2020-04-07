import { NgModule } from '@angular/core';
import { SearchComponent } from '../search.component';
import { NoResultsComponent } from '../no-results.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:[
    RouterModule.forChild([
        { path: '', component: SearchComponent},
        { path: 'noresults', component: NoResultsComponent},
      ])
    ],
    exports:[
      RouterModule
    ]
})
export class SearchRountingModule{}