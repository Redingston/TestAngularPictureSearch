import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullScreanPictureComponent } from './components/full-screan-picture/full-screan-picture.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'full', component: FullScreanPictureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
