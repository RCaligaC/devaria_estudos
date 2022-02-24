// Tipos de variáveis e constantes
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstante = ('Minha primeira constante');
console.log(minhaPrimeiraConstante);

let idade;
readline.question(`Informe sua idade: `, input => {
    idade = input;
    console.log(`Sua idade é: ${idade}`);
    readline.close()
})
