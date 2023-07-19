/* Llene un array con mínimo 5 números al azar ingresandolos por el navegador, y
muestre cual es el mayor, cuál es el menor y el promedio de los números
ingresados. */


const numeros = []
for(let i = 0; i < 5;i++){
    numeros.push(parseInt(prompt("Ingrese un numero cualquiera")))
}
let menor = 10000;
let mayor = 0;
let promedio = 0;
let suma = 0;
numeros.forEach((item,index)=>{
    suma += item;
    promedio = suma / 5;
    if(item <= menor){
        menor = item;
    }else{
        mayor = item;
    }
    document.write("Usted digitó el numero: " + item + " en la posición: " + index + "<br>")
})
document.write(`El numero menor es: ${menor} <br> El numero mayor es: ${mayor} <br> El promedio de los números ingresados es: ${promedio}`)