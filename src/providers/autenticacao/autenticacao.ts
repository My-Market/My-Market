import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from '@angular/core';
import { BaseService } from "../base.services";


@Injectable()
export class AutenticacaoProvider extends BaseService {


  constructor(
    public autentica: AngularFireAuth
  ) {
    super();
    console.log(' AutenticacaoProvider aberto ');
  }

  //metodo que autentica e verifica se o id do usuario coincide com id do email chamado uid
  criarAutenticacaoCliente(cliente: {email:string, senha:string}): Promise<firebase.User>{
    return this.autentica.auth.createUserWithEmailAndPassword(cliente.email , cliente.senha)
    .catch(this.handlePromiseError);
  }

  entrarComEmail(cliente: {email:string, senha:string}): Promise<boolean>{
    return this.autentica.auth.signInWithEmailAndPassword(cliente.email, cliente.senha)
    .then((aut: firebase.auth.UserCredential) =>{
      return aut.user != null;
    }).catch(this.handlePromiseError);
  }



}
