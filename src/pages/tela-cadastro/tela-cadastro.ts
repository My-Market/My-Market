import { TelaCadastroClientePage } from './../tela-cadastro-cliente/tela-cadastro-cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TelaCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-cadastro',
  templateUrl: 'tela-cadastro.html',
})
export class TelaCadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaCadastroPage');
  }

  proxpag(){
    this.navCtrl.push(TelaCadastroClientePage);
  }

}
