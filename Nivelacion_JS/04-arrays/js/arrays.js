const numbers=[1, 2, 3, 4];

document.write(numbers)

document.write("<ul>");
for(number in numbers){
    document.write("<li>");
    document.write(number);
    document.write("</li>");
}
document.write("</ul>");

/*crea un nuevo arreglo no altera numbers*/
/*solo contenido*/
document.write("<ul>")
numbers.map((numero) => {
    document.write("<li>"+numero+"</li>")
});
document.write("</ul>");

/*contenido y indice*/
document.write("<ul>")
numbers.map((numero, i) => {
    document.write("<li> num: "+numero+" indice: "+i+"</li>")
});
document.write("</ul>");

/*edito los valores y devuelvo un nuevo arreglo*/
document.write("<ul>")
const nuevo=numbers.map((num)=>num+1
);
document.write("</ul>");
document.write(nuevo+"<br>");
document.write(numbers+"<br>");