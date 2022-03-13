// Subir uma escadaria com 20 degraus e uma passarela no 10.

let total_degraus = 20
let subida = 0;

for(let i = 0; i < total_degraus + 1; i++){
    if(i <= total_degraus){
        subida = i;
        if(i == 10){
            console.log('andei até o degrau 10');
            continue
        };
    }else{
        break
    };
};

console.log(`O total de degraus da escadaria é ${subida}`);

