const prompt = require("prompt-sync")();
let mayor;
let menor;
let medio;
let num = [];
let incremento = 1;
while (incremento<4) {
    num.push(parseInt(prompt("Ingrese un número: ")));
    incremento++;
}
const iguales = array => array.every(dato => dato===array[0]);

if(iguales(num)){
    console.log("Los numeros ingresados son iguales", num)
}else{
    menor = Math.min(...num);
    mayor = Math.max(...num);
    const indice = num.findIndex(num => num === mayor);
    num.splice(indice,1);
    const indice1 = num.findIndex(num => num === menor);
    num.splice(indice1,1);
    medio = num[0]
    console.log(`
    Los números de mayor a menor son:
        ${mayor}
        ${medio}
        ${menor}`);
    console.log(`
    Los números de menor a mayor son:
        ${menor}
        ${medio}
        ${mayor}`);
}

