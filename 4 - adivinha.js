const readline = require("readline");
let tentativas = 3;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var numeAleatorio = Math.floor(Math.random() * 11);

rl.question("Tente descobrir qual número escolhi entre 0 e 10. Você tem 3 tentativas. Qual seu primeiro palpite?", (resposta) => {
    advinha(parseInt(resposta));
});

function advinha(resposta) {
    if (resposta === numeAleatorio) {
        console.log("Você acertou!");
        rl.close();
    } else if (resposta > numeAleatorio) {
        console.log("O número que eu escolhi é menor");
        tentativas--;
        if (tentativas > 0) {
            rl.question("Tente novamente. Você tem mais " + tentativas + " tentativas: ", (novaResposta) => {
                advinha(parseInt(novaResposta));
            });
        } else {
            console.log("Suas tentativas acabaram. O número era " + numeAleatorio);
            rl.close();
        }
    } else {
        console.log("O número que eu escolhi é maior");
        tentativas--;
        if (tentativas > 0) {
            rl.question("Tente novamente. Você tem mais " + tentativas + " tentativas: ", (novaResposta) => {
                advinha(parseInt(novaResposta));
            });
        } else {
            console.log("Suas tentativas acabaram. O número era " + numeAleatorio);
            rl.close();
        }
    }
}
