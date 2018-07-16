import { catchError, map } from 'rxjs/operators';
import { ProprietarioModel } from './../../Models/proprietario.model';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ClienteModel } from '../../Models/cliente.model';
import { BaseService } from '../base.services';
import { Observable } from '../../../node_modules/rxjs';
import firebase from "firebase";

const c = "/Cliente/";
const p = "/Proprietarios/";


@Injectable()
export class ClienteServiceProvider extends BaseService {



  clientes: AngularFireList<ClienteModel>;
  proprietario: AngularFireList<ProprietarioModel>;

  firedata2 = firebase.database().ref('/Clientes');

  constructor(public db: AngularFireDatabase) {
    super();
    this.clientes = this.db.list<ClienteModel>(c);
    this.proprietario = this.db.list<ProprietarioModel>(p);
    this.firedata2;
  }

  criarCliente(cliente: ClienteModel, uuid: string): Promise<void> {
    return this.db.object(`/Clientes/${uuid}`)
      .set(cliente);
  }

  criarProprietario(proprietario: ProprietarioModel, uuid: string): Promise<void> {
    return this.db.object(`/Proprietarios/${uuid}`).set(proprietario);
  }

  retornarEmailCliente(email: string): Observable<boolean> {
    return this.db.list(`/Clientes/`,
      (ref: firebase.database.Reference) => ref.orderByChild('email').equalTo(email)
    )
      .valueChanges()
      .pipe(
        map((cliente: ClienteModel[]) => {
          return cliente.length > 0;
        }),
        catchError(this.handleObservableError)
      );
  }

  retornarEmailProprietario(email: string): Observable<boolean> {
    return this.db.list(`/Proprietarios/`,
      (ref: firebase.database.Reference) => ref.orderByChild('email').equalTo(email)
    ).valueChanges()
      .pipe(
        map((cliente: ProprietarioModel[]) => {
          return cliente.length > 0;
        }),
        catchError(this.handleObservableError)
      );
  }


  }


