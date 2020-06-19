/*
Imports
*/
// Angular
import { Routes } from '@angular/router';

//

/*
Export
*/
export const AppRouterModule: Routes = [
  {
    path: '',
    component: HomePageComponent,

  },
  {
    path: 'oneMovie',
    component: OneMovieComponent,
  },
  { path: 'movie/:id', /*canActivate: [AuthGuard],*/
  component: OneMovieComponent },
  { path: 'tv', /*canActivate: [AuthGuard],*/
  component: TvPageComponent },
  { path: 'people/:id', /*canActivate: [AuthGuard],*/
  component: PeopleOneComponent },


];
//

// Inner
import { HomePageComponent } from "./routes/home-page/home-page.component";
import { OneMovieComponent } from './routes/one-movie/one-movie.component';
import { TvPageComponent } from './routes/tv-page/tv-page.component';
import { PeopleOneComponent } from './routes/people-one/people-one.component';
