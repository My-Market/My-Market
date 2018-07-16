import { Observable } from 'rxjs';
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
  criarAutenticacaoCliente(user: {email:string, senha:string}): Promise<firebase.User>{
    return this.autentica.auth.createUserWithEmailAndPassword(user.email , user.senha)
    .catch(this.handlePromiseError);
  }

  entrarComEmail(user: {email:string, senha:string}): Promise<boolean>{
    return this.autentica.auth.signInWithEmailAndPassword(user.email, user.senha)
    .then((aut: firebase.auth.UserCredential) =>{
      return aut.user != null
    }).catch(this.handlePromiseError);
  }





}
