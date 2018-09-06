import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular';

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
   public nome_usuario:string = "Charles franca";

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
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  ionViewDidEnter() { // função chamada quando a pagina é carregada (ionViewDidEnter só roda uma vez)
    //console.log('ionViewDidLoad FeedPage');
    this.abreCarregando();
    this.movieProvider.getPopularMovies().subscribe(
      data =>{ 
         const response = (data as any);
         var objectRetorno = JSON.parse(response._body); // conver em objeto json
         console.log(objectRetorno);
       //const response =  (data as any);
      // const objetoRetorno = JSON.parse(response);
      this.abreCarregando();
         this.listaFilmes = objectRetorno;          
       console.log(this.listaFilmes+"lista de filmes");
     },error=>{
       console.log(error);
       this.abreCarregando();
     }

     )
  }



}
