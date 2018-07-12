
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ClienteModel } from '../../Models/cliente.model';
import { BaseService } from '../base.services';




@Injectable()
export class ClienteServiceProvider extends BaseService {


  clientes: AngularFireList<ClienteModel>

  constructor(public db: AngularFireDatabase) {
    super();
    this.clientes = this.db.list<ClienteModel>('/Clientes');
  }

  criarCliente(cliente:ClienteModel, uuid:string): Promise<void>{
    return this.db.object(`/Clientes/${uuid}`)
    .set(cliente);
  }



}
