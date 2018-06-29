import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaCadastroPage } from '../tela-cadastro/tela-cadastro';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TelaInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-inicio',
  templateUrl: 'tela-inicio.html',
  
})
export class TelaInicioPage {

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams
    ) {
  }

  botaoEntrar(){
    this.navCtrl.push(TelaCadastroPage);
  }
  botaologin(){
    this.navCtrl.push(LoginPage);
  }

}
