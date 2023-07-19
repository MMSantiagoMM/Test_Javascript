/* del siguiente objeto { producto, precio, cantidad} llénelo dinámicamente con mínimo 3
productos y muestre el total a pagar de los 3 productos. */


let carrito = []
let objeto = {}
let totalApagar = 0;
let consulta = parseInt(prompt("Cuántos productos desea ingresar?"))

for(let i = 0; i < consulta; i++){
    let producto = prompt("Ingrese el nombre del producto")
    let precio = parseInt(prompt("Ingrese el precio del producto"))
    let cantidad = parseInt(prompt("Ingrese la cantidad"))
    objeto = {producto,precio,cantidad}
    carrito.push(objeto)
    totalApagar += precio * cantidad
}
document.write("El precio total es: " + totalApagar)

