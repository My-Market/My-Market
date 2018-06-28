import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaCadastroClientePage } from './tela-cadastro-cliente';

@NgModule({
  declarations: [
    TelaCadastroClientePage,
  ],
  imports: [
    IonicPageModule.forChild(TelaCadastroClientePage),
  ],
})
export class TelaCadastroClientePageModule {}
