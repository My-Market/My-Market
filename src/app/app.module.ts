import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TelaInicioPage } from '../pages/tela-inicio/tela-inicio';
import { TelaCadastroPageModule } from '../pages/tela-cadastro/tela-cadastro.module';
import { TelaCadastroClientePage } from '../pages/tela-cadastro-cliente/tela-cadastro-cliente';
import { LoginPage } from '../pages/login/login';
import { FirebaseAppConfig, AngularFireModule } from 'angularfire2';
import { ClienteServiceProvider } from '../providers/cliente-service/cliente-service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AutenticacaoProvider } from '../providers/autenticacao/autenticacao';
import {  AngularFireAuthModule } from 'angularfire2/auth';
import { TelaCadastroProprietarioPageModule } from '../pages/tela-cadastro-proprietario/tela-cadastro-proprietario.module';
import { HomePageModule } from '../pages/home/home.module';

/* Constante apiKey (chave) que nos da acesso a mexer no banco firebase que está criado
O parametro messagingSenderId é para controle de mensagens, não pretendo mexer nele agora
*/
const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDlvOkc76ZwlcTPSMdaQFimBTj_klej_AQ",
  authDomain: "mymarket-510cc.firebaseapp.com",
  databaseURL: "https://mymarket-510cc.firebaseio.com",
  projectId: "mymarket-510cc",
  storageBucket: "mymarket-510cc.appspot.com",
  messagingSenderId: "154757584535"
};

@NgModule({
  declarations: [
    MyApp,
    TelaInicioPage,
    TelaCadastroClientePage,
    LoginPage

  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    TelaCadastroPageModule,
    AngularFireModule.initializeApp(firebaseAppConfig),
    TelaCadastroProprietarioPageModule,
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TelaInicioPage,
    TelaCadastroClientePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ClienteServiceProvider,
    AutenticacaoProvider
  ]
})
export class AppModule { }
