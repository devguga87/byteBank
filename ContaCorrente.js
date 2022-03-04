export class ContaCorrente{
  constructor(agencia, saldo, cliente){
    this.agencia = agencia;
    this._saldo = saldo
    this.cliente = cliente
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

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado)
  }
}
