import { Injectable } from '@angular/core';


/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */

  let config_key_name = "config";


@Injectable() // classe que pode ser injetava em algum lugar
export class ConfigProvider {

  private config = {
    showSlide : false,
    name : "",
    userName: ""
  }

  constructor() {
    
  }
  
  //recupera os dados do local storage
  getComfigData(): any{
    return localStorage.getItem(config_key_name);
  }

  //grava os dados do local storage
  setComfigData(showSlide:boolean,name?:string,userName?:string): any{
    let config = {
      showSlide:false,
      name:"",
      userName: ""
    }

    if(showSlide){
      config.showSlide = showSlide;
    }
    if(name){
      config.name = name;
    }
    if(userName){
      config.userName = userName;
    }
     // localStorage armazena no padrão chave valor, 
     localStorage.setItem(config_key_name,JSON.stringify(config));

   }


 }
