//Classe responsável para cadastrar Cliente.
export class ClienteModel{

  constructor(
    public nome: string,
    public cpf: string,
    public uid: string,
    public email:string,
    public endereco:string,
    public cep: number,
    public bairro: string,
    public numero:number,
    public complemento:string
  ){}
}
