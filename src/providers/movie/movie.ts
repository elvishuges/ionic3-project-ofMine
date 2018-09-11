import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable() // classe que pode ser injetava em algum lugar
export class MovieProvider {

  private urlBase = "https://api.themoviedb.org/3";	

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  
  //https://api.themoviedb.org/3/movie/latest?api_key=554299a02bf72c71ebac8d2b6bd2db3d
  getLatesMovies(){
    return this.http.get(this.urlBase+"/movie/latest?api_key=554299a02bf72c71ebac8d2b6bd2db3d");
  }
  
  //https://api.themoviedb.org/3//movie/popular?api_key=554299a02bf72c71ebac8d2b6bd2db3d
  getPopularMovies(){
    return this.http.get(this.urlBase+"/movie/popular?api_key=554299a02bf72c71ebac8d2b6bd2db3d");
  }

  getMoviesDetails(filmeId){
    return this.http.get(this.urlBase+`/movie/${filmeId}?api_key=554299a02bf72c71ebac8d2b6bd2db3d`);
  }
  //https://api.themoviedb.org/3/movie/299536/reviews?api_key=554299a02bf72c71ebac8d2b6bd2db3d&language=en-US&page=1
  getMovieReviews(filmeId){
    return this.http.get(this.urlBase+`/movie/${filmeId}/reviews?api_key=554299a02bf72c71ebac8d2b6bd2db3d&language=en-US&page=1`);
  }
  

  
}
