/*   Del arreglo empleados = [
    {nombre:”pedro”, salario:5.000.000, profesión: “Abogado”} ,
    {nombre:”Angie”, salario:3.900.000, profesión: “Odontóloga”} ,
    {nombre:”Luis”, salario:2.500.000, profesión: “Asesor Bancario”},
    {nombre:”Lina”, salario:4.500.000, profesión: “Psicóloga”}
    ]
    Muestre en el navegador la suma total de los salarios, corrija el nombre de la
    profesión de Lina, agregue apellidos a los empleados. */

    let empleados = [
        {nombre: "Pedro", salario:5000000, profesión: "Abogado"} ,
        {nombre:"Angie", salario:3900000, profesión: "Odontóloga"} ,
        {nombre:"Luis", salario:2500000, profesión: "Asesor Bancario"},
        {nombre:"Lina", salario:4500000, profesión: "Psicóloga"}]

        let sumaSalarios = 0;
        empleados.forEach((item,index)=>{
            sumaSalarios += item.salario
            if(item.nombre == "Lina"){
                item.apellido = "González"
                item.profesión = "Ingeniera de Sistemas"
            } else if(item.nombre == "Pedro"){
                item.apellido = "Martínez"
            } else if (item.nombre == "Angie"){
                item.apellido = "Restrepo"
            } else {
                item.apellido = "Mosquera"
            }
            
            document.write(`Nombre del trabajador: ${item.nombre} Apellido: ${item.apellido} Salario: ${item.salario} Profesión: ${item.profesión}<br>`)
        })
        document.write("La suma de los salarios es: " + sumaSalarios + "<br>")

/*Del ejercicio anterior ordene de mayor a menor los empleados teniendo en cuenta
el salario.*/
      
        
        empleados.sort((a,b)=>{
            return b.salario - a.salario
        });
        console.log(empleados)

        document.write(`<br>Nombre de empleados organizados dependiendo del salario <br>`)
        empleados.forEach((item)=>{
            document.write(item.nombre + "<br>")
        })

    
        