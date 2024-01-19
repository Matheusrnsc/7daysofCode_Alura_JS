
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let nome;
let idade;
let linguagem;
let gostando;
rl.question(`Qual seu nome? `, (resposta)=> {
    nome =resposta;
        rl.question(`Qual sua idade? `, (resposta)=> {
            idade = resposta;
            rl.question("Qual linguagem você estuda? ", (resposta) =>{
                linguagem = resposta;
                console.log(`Olá ${nome}, você tem ${idade} anos de idade e já está aprendendo ${linguagem}!`);
                rl.question(`Você esta gostando de estudar ${linguagem}? Digite 1 para sim e 2 para não: `, (resposta)=>{
                    if (resposta==1){
                        console.log("Muito bom! Continue estudando e você terá muito sucesso.")
                    }
                    else{
                        console.log("Ahh que pena... Já tentou aprender outras linguagens?")
                    }
                    rl.close();
                })

            })
        })
})