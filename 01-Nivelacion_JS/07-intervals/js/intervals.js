const saludo=()=>{
    document.write("<li>Hola mundo</li>");
}

document.write("<ol>");

setInterval(
    saludo,
    2000//1000=1 segundo
);

document.write("</ol>")