class Produto{

    constructor(nome, preco, desconto){
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    calcularDesconto(){
        try{

            if(this.desconto > 100){
                throw new Error("Desconto não pode ser maior que 100%");
            }

            const precoComDesconto = this.preco - (this.preco * (this.desconto / 100));
            return precoComDesconto;

        } catch(error){
            console.error("Erro: ", error.message);
        }

    } 
}

let produto1 = new Produto("Notebook", 2000, 10);
console.log(produto1.calcularDesconto());

let produto2 = new Produto("Celular", 1500, 110);
console.log(produto2.calcularDesconto());