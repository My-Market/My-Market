import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaInicioPage } from './tela-inicio';

@NgModule({
  declarations: [
    TelaInicioPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaInicioPage),
  ],
})
export class TelaInicioPageModule {}
