class ContaBancaria{
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(saldo){
        this.saldo += saldo;
    }

    saque(saldo){
        try{

            if(this.saldo < saldo){
                throw new Error("Saldo insuficiente")
            }

        }catch(error){
            console.error("Erro: ", error.message);
        }
    }
}

let conta = new ContaBancaria(1000);
console.log(conta.saldo);
conta.deposito(500);
console.log(conta.saldo);
conta.saque(2000);
console.log(conta.saldo);