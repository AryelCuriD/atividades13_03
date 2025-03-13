class Estoque{
    constructor(quantidade){
        this.quantidade = quantidade;
    }

    adicionarProduto(quantidade){
        this.quantidade += quantidade;
    }

    removerProduto(quantidade){
        try{

            if(this.quantidade < quantidade){
                throw new Error("Quantidade indisponível");
            }

            this.quantidade -= quantidade;

        }catch(error){
            console.error("Erro: ", error.message);
        }

    }

    verificarEstoque(){
        return this.quantidade;
    }
}

let estoque = new Estoque(10);
console.log(estoque.verificarEstoque());
estoque.adicionarProduto(5);
estoque.removerProduto(3);
console.log(estoque.verificarEstoque());