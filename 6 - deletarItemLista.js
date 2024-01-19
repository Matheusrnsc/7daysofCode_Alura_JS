const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let verduras = [];
let frutas = ["banana", "maçã", "pera", "limão", "morango"];
let proteinas = [];
let doces = [];
let listaDeCompras = { verduras, frutas, proteinas, doces };

function adcionaItensLista() {
    rl.question('Você deseja acrescentar uma comida à sua lista? Responda com "SIM" ou "NÃO"', (resposta) => {
        resposta = resposta.toLowerCase();
        if (resposta === "sim") {
            rl.question("Qual comida você deseja inserir?", (comida) => {
                rl.question("Em qual categoria ela se encaixa? \n Verduras, Frutas, Proteína, Doces", (categoria) => {
                    categoria = categoria.toLowerCase();
                    switch (categoria) {
                        case 'verduras':
                            verduras.push(comida);
                            break;
                        case 'frutas':
                            frutas.push(comida);
                            break;
                        case 'proteinas':
                            proteinas.push(comida);
                            break;
                        case 'doces':
                            doces.push(comida);
                            break;
                        default:
                            console.log("Categoria inválida. A comida não foi adicionada à lista");
                    }
                    console.log("A lista de compras atual é:");
                    imprimeLista();
                    perguntarSeDesejaRemover();
                });
            });
        } else {
            console.log("Você escolheu não adicionar itens à sua lista de compras");
            perguntarSeDesejaRemover();
        }
    });
}

function imprimeLista() {
    console.log(`Verduras: ${verduras}`);
    console.log(`Frutas: ${frutas}`);
    console.log(`Proteínas: ${proteinas}`);
    console.log(`Doces: ${doces}`);
}

function perguntarSeDesejaRemover() {
    rl.question('Você deseja remover algum item da sua lista? Responda com "SIM" ou "NÃO"', (resposta) => {
        resposta = resposta.toLowerCase();
        if (resposta === "sim") {
            removerDaLista();
        } else {
            rl.close();
        }
    });
}

function removerDaLista() {
    rl.question("De qual lista você deseja remover? (Por exemplo, lista1)", (nomeLista) => {
        nomeLista = nomeLista.toLowerCase();
        if (listaDeCompras.hasOwnProperty(nomeLista)) {
            rl.question("Qual item?", (item) => {
                item = item.toLowerCase();
                try {
                    let index = listaDeCompras[`${nomeLista}`].indexOf(`${item}`);
                    if (index !== -1) {
                        listaDeCompras[nomeLista].splice(index, 1);
                        console.log(`Sua nova lista é ${listaDeCompras[nomeLista]}`);
                    } else {
                        console.log("O item não foi encontrado");
                    }
                } catch (error) {
                    console.log("Ocorreu um erro ao remover o item:", error);
                } finally {
                    perguntarSeDesejaRemover();
                }
            });
        } else {
            console.log("Lista não encontrada");
            perguntarSeDesejaRemover();
        }
    });
}

adcionaItensLista();
