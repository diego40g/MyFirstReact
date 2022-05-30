const fruts = ["manzana","uva","melon"];
const citrix = ["naranja","limon","toronja"];

/* sumar arreglos no agrupa en uno solo*/
const nuevo = fruts+citrix;
document.write(fruts,citrix+"<br>");
document.write(nuevo+"<br>"+"<br>");

/*spread si agrupa en un solo arreglo*/
const frutas = [...fruts,...citrix];
document.write(fruts,citrix+"<br>");
document.write(frutas+"<br>");
