import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaCadastroProprietarioPage } from './tela-cadastro-proprietario';

@NgModule({
  declarations: [
    TelaCadastroProprietarioPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaCadastroProprietarioPage),
  ],
})
export class TelaCadastroProprietarioPageModule {}
