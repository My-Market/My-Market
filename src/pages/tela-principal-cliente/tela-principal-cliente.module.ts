import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaPrincipalClientePage } from './tela-principal-cliente';

@NgModule({
  declarations: [
    TelaPrincipalClientePage,
  ],
  imports: [
    IonicPageModule.forChild(TelaPrincipalClientePage),
  ],
})
export class TelaPrincipalClientePageModule {}
