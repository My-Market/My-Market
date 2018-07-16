import { LoginPage } from './../login/login';
import { ClienteServiceProvider } from './../../providers/cliente-service/cliente-service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController, IonicPage } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';


@IonicPage()
@Component({
  selector: 'page-tela-cadastro-proprietario',
  templateUrl: 'tela-cadastro-proprietario.html',
})
export class TelaCadastroProprietarioPage {


  clienteForm: FormGroup; // Resgata os dados do ngform tela-cadastrocliente

  constructor(
    public autentica: AutenticacaoProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public clienteService: ClienteServiceProvider,
    private loading: LoadingController,
    private alertCtrl: AlertController) {

      //variavel que anula algumas letras para nao ser inserida no email
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    //Validação, verifica se campo é requirido e a quantidade de tamanho de letras que pode ser inserido

    this.clienteForm = this.formBuilder.group({
      razao: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.minLength(14)]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.compose([Validators.required, Validators.pattern(emailRegex)]), Validators.email]],
      endereco: ['', [Validators.required]], //Campo apenas requirido, não passado quantidade de letras.
      bairro: ['', [Validators.required]], //Campo apenas requirido, não passado quantidade de letras.
      numero: ['', [Validators.required]] //Campo apenas requirido, não passado quantidade de letras.
    });
  }

  //metodo submit para cadastrar
  submitMethod(): void {
    let loading:Loading = this.showloading();
    let formCliente = this.clienteForm.value;


    //autenticação
    this.autentica.criarAutenticacaoCliente({
      email: formCliente.email,
      senha: formCliente.senha
    }).then((autentica: firebase.User) => {
      delete formCliente.senha;
      let uuid: string = autentica['user']['uid'];

      this.clienteService.criarProprietario(formCliente, uuid)
        .then(() => {
          console.log('Proprietário cadastrado cadastrado');
          this.navCtrl.setRoot(LoginPage);
          loading.dismiss();
          this.alertShow();
        }).catch((error: any) => {
          console.log(error);
        });
      }).catch((error: any) => {
      console.log(error);
      });
    }

    private showloading(): Loading{
      let loading:Loading = this.loading.create({
        content:"Por favor aguarde..."
      })
      loading.present();

      return loading;
    }

    private alertShow(){
       this.alertCtrl.create({
        title:"Carregado com sucesso!",
        message:"Toque em OK e vamos iniciar! :D",
        buttons: [{
          text: "OK"
        }],
      }).present();
    }


}
