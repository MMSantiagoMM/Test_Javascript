/* Guarda en un Array 6 frutas y muestra en el navegador cuales están guardadas en las
posiciones pares e impares. */

const frutas = [];

for (let i = 1; i <= 6; i++) {
    frutas.push(prompt("Ingrese una fruta"))
}
let auxpares = ""
let auxImpares = ""
 frutas.forEach((item,index)=>{

    if(index % 2 === 0){
        auxpares += item + ", ";
    }else{
        auxImpares += item + ", ";
    }
 
 })
 document.write(`En las posiciones pares están las siguientes frutas: ${auxpares} <br> En las posiciones impares están las siguientes frutas: ${auxImpares}`)



