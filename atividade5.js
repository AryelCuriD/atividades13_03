class Animal {
    constructor(nome, especie, idade) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    fazerSom(){
        if(this.especie == "vaca"){
            console.log("Muuuu");
        }else if(this.especie == "cachorro"){
            console.log("Au Au");
        }else if(this.especie == "gato"){
            console.log("Miau");
        }else if(this.especie == "elefante"){
            console.log("fuuuuuuuh uuuuuuuuh");
        }else {
            console.log("Som não identificado");
        }
    }
}

const kaua = new Animal("Kaua", "elefante", 2);
console.log(kaua);
kaua.fazerSom();

const aryel = new Animal("Aryel", "cachorro", 3);
console.log(aryel);
aryel.fazerSom();

const thales = new Animal("Thales", "elefante", 1);
console.log(thales);
thales.fazerSom();

const brendha = new Animal("Brendha", "vaca", 4);
console.log(brendha);
brendha.fazerSom();

const bruno = new Animal("Bruno", "lobo", 5);
console.log(bruno);
bruno.fazerSom();