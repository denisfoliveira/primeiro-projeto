// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo.

//Se XP for menor do que 1.000 = Ferro
//Se XP for menor entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.000 e 10.000 = Imortal
//Se XP for maior ou igual a 10.001 = Radiante

let nomeHeroi = "Darius";
let xpHeroi = 5020;

if (xpHeroi < 1000) {
  console.log("O Nível do " + nomeHeroi + " é Ferro");
} else if (xpHeroi >= 1000 && xpHeroi < 2000) {
  console.log("O Nível do " + nomeHeroi + " é Bronze");
} else if (xpHeroi >= 2000 && xpHeroi < 5000) {
  console.log("O Nível do " + nomeHeroi + " é Prata");
} else if (xpHeroi >= 5000 && xpHeroi < 7000) {
  console.log("O Nível do " + nomeHeroi + " é Ouro");
} else if (xpHeroi >= 7000 && xpHeroi < 8000) {
  console.log("O Nível do " + nomeHeroi + " é Platina");
} else if (xpHeroi >= 8000 && xpHeroi < 9000) {
  console.log("O Nível do " + nomeHeroi + " é Ascendente");
} else if (xpHeroi >= 9000 && xpHeroi < 10000) {
  console.log("O Nível do " + nomeHeroi + " é Imortal");
} else if (xpHeroi >= 10000) {
  console.log("O Nível do " + nomeHeroi + " é Radiante");
}