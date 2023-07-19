/* del siguiente objeto { producto, precio, cantidad} llénelo dinámicamente con mínimo 3
productos y muestre sus datos en el navegador. */

let carrito = []
let objeto = {};
let consulta = parseInt(prompt("Cuántos productos desea ingresar?"))

for(let i = 0; i < consulta;i++){
    let producto = prompt("Ingrese el nombre del producto ")
    let precio = parseInt(prompt("Ingrese el precio del producto"))
    let cantidad = parseInt(prompt("Ingrese la cantidad"))
    objeto = {producto,precio,cantidad}
    carrito.push(objeto)
}

carrito.forEach((item)=>{
    document.write("Producto: " + item.producto + " Precio unitario: " + item.precio + " Cantidad: "+ item.cantidad + "<br>")
})



