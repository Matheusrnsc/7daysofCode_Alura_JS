function soma() {
    let soma = 0;
    for (var i = 0; i < arguments.length; i++) {
        console.log(`Valor${i}: ${arguments[i]}`);
        soma = soma + parseInt(arguments[i], 10); // Convertendo a string para número antes de somar
    }
    return soma;
}

function subtracao(a,b){
    parseInt(a)
    parseInt(b)
    console.log(`Valor 1: ${a} \nValor 2: ${b}`)
    return (b-a)
}
function multiplicacao(){
    let multiplica = 1
    for( let i = 0; i< arguments.length; i++){
        console.log(`Valor${i}: ${arguments[i]}`)
        multiplica = multiplica * arguments[i]
    }
    return multiplica
}
function divisao(a,b){
    parseInt(a)
    parseInt(b)
    console.log(`Valor 1: ${a} \nValor 2: ${b}`)
    return (a/b)
}

const { stderr } = require("process")
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })

    function perguntaOperacao() {
        rl.question("Qual operação matemática você deseja realizar? \n 1 - SOMA \n 2 - SUBTRAÇÃO \n 3 - MULTIPLICAÇÃO \n 4 - DIVISÃO \n 5 - SAIR", (resposta) => {
            switch (parseInt(resposta)) {
                case 1:
                    rl.question("Quais numeros você deseja somar? Separe por vírgulas", (numeros) => {
                        const numerosArray = numeros.split(",").map(Number);
                        console.log(soma(...numerosArray));
                        rl.close();
                    })
                    break;
                case 2:
                    rl.question("Você desja subtrair qual valor de qual valor? Ex: subtrair 35 de 100 = 65. SEPARAR COM VÍRGULAS", resposta => {
                        const numeros = resposta.split(",").map(Number);
                        console.log(subtracao(...numeros));
                        rl.close();
                    })
                    break;
                case 3:
                    rl.question("Quais numeros você deseja multiplicar?", (resposta) => {
                        const numerosArray = resposta.split(",").map(Number);
                        console.log(multiplicacao(...numerosArray));
                        rl.close();
                    })
                    break;
                case 4:
                    rl.question("Qual o Dividendo e o divisor? SEPARAR COM VÍRGULAS", (resposta) => {
                        const numeros = resposta.split(",").map(Number);
                        console.log(divisao(...numeros));
                        rl.close();
                    })
                    break;
                case 5:
                    console.log("Você fechou a calculadora, até logo!")
                    rl.close();
                    break;
                default:
                    console.log("Opção inválida. Por favor, escolha uma opção válida.");
                    rl.close();
            }
        })
    }
    
    perguntaOperacao();
