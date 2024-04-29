console.log('Antes do setTimeout');

setTimeout(function () {
    console.log('Antes do for');

    for (let index = 0; index < 1000; index++) { }

    console.log('Depois do for')

}, 5000);

console.log('Depois do setTimeout');


console.log('---------------------------------------')
let contador = 0;

setInterval(function () {
    console.log(contador++)
},1000);

for(let index = 0){};