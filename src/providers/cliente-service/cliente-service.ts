
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ClienteModel } from '../../Models/cliente.model';




@Injectable()
export class ClienteServiceProvider {
  handlePromiseError(arg0: any): any {
    throw new Error("Erro ao criar o cliente");
  }

  clientes: AngularFireList<ClienteModel>

  constructor(public db: AngularFireDatabase) {
    this.clientes = this.db.list<ClienteModel>('/Clientes');
  }

  criarCliente(cliente:ClienteModel, uuid:string): Promise<void>{
    return this.db.object(`/Clientes/${uuid}`)
    .set(cliente);
  }



}
