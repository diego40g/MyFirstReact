var Ball = {
    color: "red",
    size: 7,
    jump: false,
    setJump: function(){
        this.jump=true
    }
}
console.log(Ball);

const User = {
    name:"Diego",
    age:24,
    email:"diegopaznaula@gmail.com"
}
document.write(User.name);

/*sin Destructuring*/
document.write("<p>"+User.name+"</p>");
document.write("<p>"+User.age+"</p>");
document.write("<p>"+User.email+"</p>");

/*con Destructuring*/
const {nombre,edad,correo,ciudad}={
    nombre: "Ignacio",
    edad: 20,
    correo:"dipaz@espe.edu.ec"
}
document.write("<p>"+nombre+"</p>");
document.write("<p>"+edad+"</p>");
document.write("<p>"+correo+"</p>");
document.write("<p>"+ciudad+"</p>");