import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular';
import { FilmesDetalhesPage } from '../filmes-detalhes/filmes-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-feed',
   templateUrl: 'feed.html',
   providers:[
   /* MoveiProvideer precisa, apenas, ser carreagado nessse provider de feed
   não em app.module.ts, pois em app será carregado em todos arquivos. E será apenas feedts
   que que usará MovieProvider.
   */  
   MovieProvider 
   ]
 })
 export class FeedPage {
  
  public objectoFeed = {
    titulo: "Elvis Huges",
    data: "September 14, 1992",
    descricao:"Estou criando um app incrivel",
    qntdLikes: 12,
    qntdComents:4,
    timeComent:"11h ago"
  }

   public listaFilmes = new Array<any>();
   public loader;
   public refresher;
   public isRefreshing:boolean = false; // diz se 
   public page = 1;
   public infiniteScroll;
   

   constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     private movieProvider:MovieProvider,
     public loadingCtrl: LoadingController
     ) {
   }

   abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }
   
  doRefresh(refresher) {
    
    this.refresher = refresher; // variável global recebe refresher   
    this.isRefreshing = true; 
    this.carregarFilmes();
  }
  
  goToDetalhe(filme){
    console.log(filme);
    this.navCtrl.push(FilmesDetalhesPage,{ id:filme.id }); // passando o id fo filme
  }
  
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.page++; // toda fez que chegar no final da pagina ele vai adiciinar +1 
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }



  ionViewDidEnter() { // função chamada quando a pagina é carregada (ionViewDidEnter só roda uma vez)
    //console.log('ionViewDidLoad FeedPage');
     this.carregarFilmes();
  }
  
  carregarFilmes(newPage : boolean = false){
    
    this.abreCarregando();
    this.movieProvider.getPopularMovies(this.page).subscribe(
      data =>{ 
         const response = (data as any);
         const objectRetorno = JSON.parse(response._body); // conver em objeto json          
         
         if(newPage){
           this.listaFilmes = this.listaFilmes.concat(objectRetorno.results);
           this.infiniteScroll.complete();
         }else{
           this.listaFilmes = objectRetorno.results;
         }

         console.log(objectRetorno.results);
         this.fechaCarregando();

         if(this.isRefreshing){
           this.refresher.complete();
           this.isRefreshing = false;
         }
                 
       console.log(this.listaFilmes+"lista de filmes");
     },error=>{
       console.log(error);
       this.fechaCarregando();

       if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
     }

     )

  }


}
