import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


// Router
import { RouterModule } from "@angular/router"
import { AppRouterModule } from "./app.router";
import { AppComponent } from './app.component';

//Routes
import { HomePageComponent } from './routes/home-page/home-page.component';

//Services
import { CrudService } from "./services/crud/crud.service";
import { CastVideoService } from './services/cast/cast-video.service';


//Shared
import { HeaderComponent } from './shared/header/header.component';
import { ItemPostComponent } from './shared/item-post/item-post.component';
import { SearchSourceFormComponent } from './shared/search-source-form/search-source-form.component';
import { ItemSourceComponent } from './shared/item-source/item-source.component';
import { OneMovieComponent } from './routes/one-movie/one-movie.component';
import { MyMovieComponent } from './routes/my-movie/my-movie.component';
import { PopularMovieComponent } from './shared/popular-movie/popular-movie.component';
import { TopRatedMovieComponent } from './shared/top-rated-movie/top-rated-movie.component';
import { NowPlayingMovieComponent } from './shared/now-playing-movie/now-playing-movie.component';
import { TvPageComponent } from './routes/tv-page/tv-page.component';
import { PopularTvComponent } from './shared/popular-tv/popular-tv.component';
import { TvsPostComponent } from './shared/tvs-post/tvs-post.component';
import { TopRatedTvComponent } from './shared/top-rated-tv/top-rated-tv.component';
import { LatestTvComponent } from './shared/latest-tv/latest-tv.component';
import { CreditsMovieComponent } from './shared/credits-movie/credits-movie.component';
import { CreditMoviePostComponent } from './shared/credit-movie-post/credit-movie-post.component';
import { GenresMovieComponent } from './shared/genres-movie/genres-movie.component';
import { GenreMovieOneComponent } from './shared/genre-movie-one/genre-movie-one.component';
import { PeopleOneComponent } from './routes/people-one/people-one.component';
import { MovieListPeopleComponent } from './shared/movie-list-people/movie-list-people.component';
import { MovieListPeopleOneComponent } from './shared/movie-list-people-one/movie-list-people-one.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ItemPostComponent,
    SearchSourceFormComponent,
    ItemSourceComponent,
    OneMovieComponent,
    MyMovieComponent,
    PopularMovieComponent,
    TopRatedMovieComponent,
    NowPlayingMovieComponent,
    TvPageComponent,
    PopularTvComponent,
    TvsPostComponent,
    TopRatedTvComponent,
    LatestTvComponent,
    CreditsMovieComponent,
    CreditMoviePostComponent,
    GenresMovieComponent,
    GenreMovieOneComponent,
    PeopleOneComponent,
    MovieListPeopleComponent,
    MovieListPeopleOneComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( AppRouterModule, { onSameUrlNavigation: 'reload' } ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    CrudService,
    CastVideoService
    ],
  bootstrap: [AppComponent]
})


export class AppModule { }
