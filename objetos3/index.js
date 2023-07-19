/* del siguiente objeto { producto, precio, cantidad} llénelo dinámicamente con mínimo 3
productos y muestre el total a pagar de los 3 productos y también el total de la compra
con el iva aumentado. */


let carrito = []
let objeto = {};
let totalApagar = 0;
let consulta = parseInt(prompt("Cuántos productos desea ingresar?"))

for(let i = 0; i < consulta;i++){
    let producto = prompt("Ingrese el nombre del producto ")
    let precio = parseInt(prompt("Ingrese el precio del producto"))
    let cantidad = parseInt(prompt("Ingrese la cantidad"))
    totalApagar += precio
    objeto = {producto,precio,cantidad}
    carrito.push(objeto)
}

carrito.forEach((item)=>{
    document.write("Producto: " + item.producto + " Precio: " + item.precio + " Cantidad"+ item.cantidad + "<br>")
})
document.write("El total a pagar sin IVA es de: " + totalApagar + "<br>")
document.write("El total con IVA es de: " + iva(totalApagar));


function iva (element){
    return element + (element* 0.19);
};