import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from '@angular/core';


@Injectable()
export class AutenticacaoProvider {
  handlePromiseError(arg0: any): any {
    throw new Error("Erro na autenticação");
  }
  constructor(
    public autentica: AngularFireAuth
  ) {
    console.log(' AutenticacaoProvider aberto ');
  }

  //metodo que autentica e verifica se o id do usuario coincide com id do email chamado uid
  criarAutenticacaoCliente(cliente: {email:string, senha:string}): Promise<firebase.User>{
    return this.autentica.auth.createUserWithEmailAndPassword(cliente.email , cliente.senha)
    .catch(this.handlePromiseError);
  }



}
