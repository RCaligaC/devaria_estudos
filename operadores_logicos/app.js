
// Este programa vai checar se a pessoa é maior de 18 anos e tem habilitação para entrar no kart.
// Além das verificações, vai precisar verificar se a pessoa esta na lista do horário

const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});

readline.question('Qual o seu ano de nascimento? ', ano => {
    if (ano > 2004){
        console.log('Você não tem 18 anos');
        readline.close();

    }else{
        readline.question('Você tem habilitação? (Sim/Não) ', temHabilitacao =>{
            if (!(temHabilitacao.toUpperCase() === 'SIM')){
                console.log('Você não tem habilitação para entrar no kart');
                readline.close();

            }else{
                readline.question('Qual o seu nome? ', nome =>{
                    switch(nome){
                        case 'caliga' :
                            console.log(`Bem vindo ${nome}`);
                            break;
                            //readline.close();
                        case 'renan' :
                            console.log(`Bem vindo ${nome}`);
                            break;
                            //readline.close();
                        default:
                            console.log('Nome não identificado na lista');
                    }
                });
            }
        })
    }
})