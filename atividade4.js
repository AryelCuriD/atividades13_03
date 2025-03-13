class Carro{

    constructor(modelo, cor, ano){
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    mostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Ano: ${this.ano}`);
    }
}

let carro = new Carro("Civic", "Preto", 2020);
carro.mostrarDetalhes();