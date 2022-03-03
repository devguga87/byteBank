class Cliente{
  constructor(nome, cpf){
    this.nome = nome;
    this.cpf = cpf;

  }
}

class ContaCorrente{
  constructor(agencia, saldo){
    this.agencia = agencia;
    this.saldo = saldo
  }
  depositar(valor){
    if(valor > 0){
      this.saldo += valor
    } else{
      console.log('operacao negada')
    }
  }
  sacar(valor){
    if(this.saldo >= valor){
      this.saldo -= valor
    } else {
      console.log('operacao negada')
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(200);
contaCorrenteRicardo.sacar(100)

console.log(contaCorrenteRicardo.saldo);


