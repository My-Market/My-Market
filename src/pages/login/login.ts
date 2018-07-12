import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';
import { TelaInicioPage } from '../tela-inicio/tela-inicio';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public autentica: AutenticacaoProvider,
    private loading: LoadingController,
    private alertCtrl: AlertController) {

      let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.compose([Validators.required, Validators.pattern(emailRegex)])]],
        senha: ['', [Validators.required, Validators.minLength(6)]],
      });
  }



  logar() {
    let loading: Loading = this.showloading();
    let formCliente = this.loginForm.value;

    this.autentica.entrarComEmail({
      email: formCliente.email,
      senha: formCliente.senha
    }).then((logado: boolean) => {
      if (logado) {
        this.navCtrl.setRoot(TelaInicioPage);
        loading.dismiss();
        this.alertShow();
      }
    }).catch((error: any) => {
      console.log(error);
      loading.dismiss();
      this.alertErroShow(error)
    });
  }

  private showloading(): Loading {
    let loading: Loading = this.loading.create({
      content: "Por favor aguarde..."
    })
    loading.present();
    return loading;
  }

  private alertShow() {
    this.alertCtrl.create({
      title: "Carregado com sucesso!",
      message: "Toque em OK e vamos iniciar! :D",
      buttons: [{
        text: "OK",
        role: "null"
      }],
      cssClass: "$alert-input-placeholder-color",


    }).present();
  }

  private alertErroShow(message:string): void{
    message = "Error ao entrar ! Verifique seu email ou senha."
    this.alertCtrl.create ({
      message: message,
      buttons: [{
        text: "OK",
        role: null
      }]
    }).present();
  }

}
