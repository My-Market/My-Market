import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TelaInicioPage } from '../pages/tela-inicio/tela-inicio';
import { TelaCadastroPageModule } from '../pages/tela-cadastro/tela-cadastro.module';
import { TelaCadastroClientePage } from '../pages/tela-cadastro-cliente/tela-cadastro-cliente';



@NgModule({
  declarations: [
    MyApp,
    TelaInicioPage,
    TelaCadastroClientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TelaCadastroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TelaInicioPage,
    TelaCadastroClientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
