let verduras = [];
let frutas = [];
let proteinas = [];
let doces = [];
let listaDeCompras = [verduras,frutas,proteinas,doces]

const { futimes } = require("fs");
const readline =  require("readline")

const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});

adcionaItensLista();

function adcionaItensLista()
{rl.question('Voce deseja acrescentar uma comida à sua lista? Responda com "SIM" ou "NÃO"', (resposta) =>{
    resposta = resposta.toLowerCase();
    if(resposta == "sim"){
        rl.question("Qual comida você deseja inserir?", (comida) =>{
            rl.question("Em qual categoria ela se encaixa? \n Verduras, Frutas, Proteína, Doces", (categoria) =>{
                categoria = categoria.toLowerCase();
                switch (categoria){
                    case 'verduras':
                        verduras.push(comida)
                        break;
                    case 'frutas':
                        frutas.push(comida)
                        break;
                    case 'proteinas':
                        proteinas.push(comida)
                        break
                    case 'doces':
                        doces.push(comida)
                        break;
                    default:
                        console.log("Categoria inválida. A comida não foi adcionada a lista")
                }
                console.log("A lista de compras atual é:")
                imprimeLista();
                adcionaItensLista();
            })
        })
    }
    else{
        console.log("Você escolheu não adcionar itens a sua lista de compras")
        rl.close()
    }
})}

function imprimeLista(){
    console.log(`Verduras: ${verduras}`)
    console.log(`frutas: ${frutas}`)
    console.log(`proteinas: ${proteinas}`)
    console.log(`deoces: ${doces}`)
}