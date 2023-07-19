/*del ejercicio anterior calcular cuántos días le falta a cada cupón para caducar y mostrar en
el navegador.  */

let cupones = [
    { cupon: "semana10", descuento: "20%", fecha_caducidad: "29-07-2023" },
    { cupon: "comprasmayores100", descuento: "10%", fecha_caducidad: "25-07-2023" },
    { cupon: "viernesloco", descuento: "15%", fecha_caducidad: "27-07-2023" }
]


for (let i = 0; i < cupones.length; i++) {
    let fechaString = cupones[i].fecha_caducidad
    let partesFecha = fechaString.split("-")
  

    let dia = partesFecha[0];
    let mes = partesFecha[1];
    let anio = partesFecha[2];
  

    let nuevaFecha = mes + "-" + dia + "-" + anio;

    cupones[i].fecha_caducidad = nuevaFecha;
  }
  
  console.log(cupones);



console.log(cupones)
let fechaActual = new Date();
console.log(fechaActual)
function diasCaducar(days){
    let fechaActual = new Date();
    let fechaVencimiento = new Date(days);
    let diferencia = fechaVencimiento - fechaActual
    let tiempoDia = new Date(1000*60*60*24)
    let diasFaltantes = Math.ceil(diferencia/tiempoDia)
    return diasFaltantes
}

cupones.forEach((item)=>{
    let i = 1;
    document.write(`Al cupon: "${item.cupon}" le faltan: ${diasCaducar(item.fecha_caducidad)} <br>`)

}) 