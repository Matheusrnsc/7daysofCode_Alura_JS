const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let linguagens = [];
console.log('Bem vindo ao jogo: "Descubra sua carreira" ');

rl.question("Escolha qual carreira você deseja seguir:\n 1 - Front-End\n 2 - Back-End \n", (resposta) => {
    if (resposta == '1') {
        console.log("Muito legal, a área de Front é responsável pela interface gráfica do usuário de um site, por exemplo.");
        rl.question("Sabendo disso, qual caminho você escolhe seguir, aprender REACT ou VUE? \n 1 - REACT \n 2 - VUE", (resposta) => {
            if (resposta == '1') {
                linguagens.push("React");
                console.log("React é uma linguagem muito poderosa e atualmente está sendo muito utilizada no mercado de trabalho\n Com mais um pouco de dedicação você pode aprender uma linguagem e se tornar um desenvolvedor FULLSTACK. Sabe o que isso significa?");
            } else {
                linguagens.push("Vue");
                console.log("Vue é uma linguagem muito poderosa e atualmente está sendo muito utilizada no mercado de trabalho\n Com mais um pouco de dedicação você pode aprender uma linguagem e se tornar um desenvolvedor FULLSTACK. Sabe o que isso significa?");
            }
            perguntarTecnologia();
        });
    } else {
        console.log("Que legal! A função de um backend está relacionada com servidores, bancos de dados, segurança, estrutura, gerenciamento de conteúdo e atualizações.");
        rl.question("Você vai mergulhar no mundo de C# ou JAVA? \n 1 - C#\n 2 - JAVA \n", (resposta) => {
            
            if (resposta == '1') {
                linguagens.push("C#");
                console.log("C# é uma linguagem muito poderosa e atualmente está sendo muito utilizada no mercado de trabalho\n Com mais um pouco de dedicação você pode aprender uma linguagem e se tornar um desenvolvedor FULLSTACK. Sabe o que isso significa?");
            } else {
                linguagens.push("Java");
                console.log("Java é uma linguagem muito poderosa e atualmente está sendo muito utilizada no mercado de trabalho. \n Com mais um pouco de dedicação você pode aprender uma linguagem e se tornar um desenvolvedor FULLSTACK. Sabe o que isso significa?");
            }
            perguntarTecnologia();
        });
    }
});

function perguntarTecnologia() {
    rl.question("Existe alguma tecnologia que você quer se especializar?\n 1 - Sim\n 2 - Não\n", (resposta) => {
        if (resposta === '1') {
            rl.question("Qual? ", (tecnologia) => {
                tecnologia = tecnologia.toLowerCase();
                linguagens.push(tecnologia);
                switch (tecnologia) {
                    case 'python':
                        console.log("Python é uma linguagem de programação de alto nível...");
                        break;
                    case 'javascript':
                        console.log("JavaScript é uma linguagem de programação interpretada...");
                        break;
                    case 'c++':
                        console.log("C++ é uma linguagem de programação compilada...");
                        break;
                    case 'ruby':
                        console.log('Ruby é uma linguagem de programação interpretada...');
                        break;
                    case 'elixir':
                        console.log("Elixir é uma linguagem de programação funcional...");
                        break;
                    default:
                        console.log(`Desculpe, não temos informações sobre a tecnologia ${tecnologia}.`);
                }

                // Chama recursivamente a função para fazer a próxima pergunta
                perguntarTecnologia();
            });
        } else {
            // Fecha a interface quando o usuário não quiser mais adicionar tecnologias
            console.log(`A lista das tecnologias que você escolheu:[\n${linguagens}]`);
            rl.close();
        }
    });
}