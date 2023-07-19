/* Del siguiente arreglo
[zanahoria,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandía] solo las
frutas en el navegador. */

const frutas = ['zanahoria','banano','manzana','pera','cebolla','papa','fresas','Ajo','Sandía'];

frutas.forEach((item)=>{
    if(item == 'banano' || item == 'manzana' || item == 'pera' || item == 'fresas' || item == 'sandía'){
        document.write(item + " - ")
    }
})