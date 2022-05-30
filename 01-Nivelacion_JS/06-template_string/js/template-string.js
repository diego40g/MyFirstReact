const name="Diego";
const age=new Date().getFullYear()-1997;

console.log("Bienvenido "+name+", tu edad es "+age);
console.log("Bienvenido",name,", tu edad es",age);

/*backticks*/
console.log(`Bienvenido ${name}, tu edad es ${age}.`);
console.log(`${new Date()}`.toUpperCase());
const dateToday=new Date();
console.log(`${dateToday}`.toUpperCase());
