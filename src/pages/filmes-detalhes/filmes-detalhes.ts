import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmesDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes-detalhes',
  templateUrl: 'filmes-detalhes.html',
  providers:[
    MovieProvider
  ]
})
export class FilmesDetalhesPage {
  
  public filme;
  public comentariosFilme  = new Array<any>();
  public filmeId;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public movieProvider : MovieProvider
    ) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad FilmesDetalhesPage');
    this.filmeId = this.navParams.get("id");
    this.movieProvider.getMoviesDetails(this.filmeId).subscribe(data=>{
      let retorno = (data as any)._body;
      this.filme = JSON.parse(retorno);
    }),
    
    this.filmeId = this.navParams.get("id");
    this.movieProvider.getMovieReviews(this.filmeId).subscribe(data=>{
       let retorno2 = (data as any)._body;
       console.log("Comentarios de Filme"+retorno2);
       this.comentariosFilme = JSON.parse(retorno2);
       
    })
    
  }

 

}
