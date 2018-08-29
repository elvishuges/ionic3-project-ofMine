import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable() // classe que pode ser injetava em algum lugar
export class MovieProvider {

  private urlBase = "https://api.themoviedb.org/3";	

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
  

  getLatesMovies(){
    return this.http.get(this.urlBase+"/movie/latest?api_key=554299a02bf72c71ebac8d2b6bd2db3d");
  }

  getPopularMovies(){
    return this.http.get(this.urlBase+"/movie/popular?api_key=554299a02bf72c71ebac8d2b6bd2db3d");
  }

  
}
