/*var (problema comun undefined)*/
var name="Diego";
var saludo = function(){
    document.write("hola mundo")
}

document.write(name);
document.write("\n");
saludo();

/*let (problema error de inicializacion)*/
//document.write(nombre);
let nombre = "Ignacio"; /*puedo usar desde que inicializo*/
nombre="Isma";
document.write(nombre);

/*const */
const age=8;
document.write(age);
