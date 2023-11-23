var heroi= {

    nome: "Nome do Heroi",

    xp: 900
}
console.log("Nome do herói: " + heroi.nome )
console.log("Xp do herói: " + heroi.xp)

// Definindo a variável de XP do herói (substitua pelo valor real)
var xpDoHeroi = 7000; // Exemplo: 7000 de XP

// Verificando o nível do herói com base na XP
var nivelDoHeroi;

if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 6000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
    nivelDoHeroi = "Platina Diamante";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivelDoHeroi = "Imortal";
} else if (xpDoHeroi >= 10001) {
    nivelDoHeroi = "Radiante";
    }    else (xpDoHeroi<=1000)
    nivelDoHeroi ="Prata Afundado";{

    }



// Exibindo o nível do herói
console.log("Nível do herói: " + nivelDoHeroi);