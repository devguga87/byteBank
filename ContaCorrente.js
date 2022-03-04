export class ContaCorrente{
  constructor(agencia, saldo){
    this.agencia = agencia;
    this._saldo = saldo
  }
  depositar(valor){
    if(valor<=0) return;
    this._saldo += valor
  }
  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
      return valor;
    } 
  }
}
