let divMayor = document.getElementById("mayor");
let divMedio = document.getElementById("medio");
let divMenor = document.getElementById("menor");
let divMayor2 = document.getElementById("mayor2");
let divMedio2 = document.getElementById("medio2");
let divMenor2 = document.getElementById("menor2");
let btnOrdenar = document.getElementById("btnOrdenar");
let text = document.getElementById("text");
btnOrdenar.addEventListener('click', function(){
    let objetoNum1 = parseInt(document.getElementById("num1").value);
    let objetoNum2 = parseInt(document.getElementById("num2").value);
    let objetoNum3 = parseInt(document.getElementById("num3").value);
    ordenar(objetoNum1,objetoNum2,objetoNum3)
});

function ordenar(num1,num2,num3){
    let mayor;
    let menor;
    let medio;
    
    if (num1===num2 && num2===num3) {
        text.innerHTML = "Los numeros son iguales";
        divMayor.innerHTML =""
        divMedio.innerHTML =""
        divMenor.innerHTML =""
        divMayor2.innerHTML =""
        divMedio2.innerHTML =""
        divMenor2.innerHTML =""
    }else{
        text.innerHTML = " ";
        mayor = Math.max(num1,num2,num3);
        menor = Math.min(num1,num2,num3);
        medio = (num1+num2+num3)-mayor-menor;
        divMayor.innerHTML = mayor
        divMedio.innerHTML = medio
        divMenor.innerHTML = menor
        divMayor2.innerHTML = mayor
        divMedio2.innerHTML = medio
        divMenor2.innerHTML = menor
    }
}
