function calculadoraRanqueada(vitorias,derrotas){
  return vitorias - derrotas

}

let saldoDeVitorias = calculadoraRanqueada(50,5)
const mensagem = "O Herói tem de saldo de "+ saldoDeVitorias +" está no nível de " 

if (saldoDeVitorias <= 10){
    nivelDeHeroi = "Ferro"
} else if(saldoDeVitorias >=11 && saldoDeVitorias <=20){
    nivelDeHeroi ="Bronze"
}  else if(saldoDeVitorias >=21 && saldoDeVitorias <=50){
    nivelDeHeroi ="Prata"
}  else if(saldoDeVitorias >=51 && saldoDeVitorias <=80){
    nivelDeHeroi ="Ouro"
}  else if(saldoDeVitorias >=81 && saldoDeVitorias <=90){
    nivelDeHeroi ="Diamante"
}  else if(saldoDeVitorias >=91 && saldoDeVitorias <=100){
    nivelDeHeroi ="Lendario"
} else {
    nivelDeHeroi = "Imortal"
}
 console.log (mensagem + nivelDeHeroi)