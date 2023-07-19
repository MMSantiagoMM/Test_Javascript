/* Del Objeto cupones = {
{cupon:”semana10”, descuento:”20%”, fecha_caducidad:”29-07-2023”},
{cupon:”comprasmayores100”, descuento:”10%”, fecha_caducidad:”25-07-2023”},
{cupon:”viernesloco”, descuento:”15%”, fecha_caducidad:”27-07-2023”},
}
Cambiar la clave cupón por nombre conservando los valores. */

let cupones = [
    {cupon:"semana10", descuento: "20%", fecha_caducidad:"29-07-2023"},
    {cupon:"comprasmayores100", descuento:"10%", fecha_caducidad:"25-07-2023"},
    {cupon:"viernesloco", descuento:"15%", fecha_caducidad:"27-07-2023"}
]



cupones = cupones.map(({ cupon, ...rest }) => ({ nombre: cupon, ...rest }));

console.log(cupones)