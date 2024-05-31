const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let heroi = "João";

rl.question("Você chegou a um lugar onde tem dois caminhos à sua frente, esquerda e direita, qual escolher?\n", (caminho) => {
  if (caminho === "esquerda") {
    rl.question("Existe um obstáculo no seu caminho?\n", (obstaculo) => {
      if (obstaculo === "sim") {
        console.log("Ah, esse caminho está bloqueado, tente o caminho da direita.");
        caminhoDireita();
      } else {
        rl.question("Existe uma ponte para atravessar?\n", (ponte) => {
          if (ponte === "sim") {
            console.log("Você segue pelo caminho da esquerda.");
          } else {
            console.log("Oh não, essa ponte está quebrada, não posso passar por aqui. Tente o caminho da direita.");
            caminhoDireita();
          }
          rl.close();
        });
      }
    });
  } else {
    caminhoDireita();
  }
});

function caminhoDireita() {
  console.log("Parabéns, você chegou até a princesa!");
}
