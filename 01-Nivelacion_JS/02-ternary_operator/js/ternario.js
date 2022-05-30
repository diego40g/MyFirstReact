/* sin TERNARIO */
const cuenta = -10;
let mensaje;
if(cuenta<0){
    mensaje="No tienes saldo";
}else{
    mensaje="Tienes saldo";
}
document.write("<p>Valor Cuenta ="+cuenta+"</p>");
document.write(mensaje);


const count=10;
const message = cuenta < 0 ? "Si pasa":"No pasa";
document.write("<p>Valor Cuenta ="+count+"</p>");
document.write(message);

const saludo=1;
const resultado=saludo<0 && "Di Hola";
document.write("<p>Saludo "+resultado+"</p>");