import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FeedPage {

	
  public nome_usuario:string = "Charles franca";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(numero:number):void {
  	
  }

  ionViewDidLoad() { // função chamada quando a pagina é carregada
    console.log('ionViewDidLoad FeedPage');
    this.somaDoisNumeros(2);
  }



}
