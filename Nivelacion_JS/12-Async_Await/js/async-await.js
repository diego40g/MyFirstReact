/*async devuelve PROMISE*/
const saludo = () => {
    return new Promise((resolve, reject) => {
        resolve("Hola mundo!");
    });
};

const saludoAsync = async()=>{
    return "Hola mundo";
}

saludo().then(response=>console.log(response));
saludoAsync().then(response=>console.log(response));

/* tarda cierto tiempo en hacer algo*/
const peticion = () => {
    setTimeout(()=>{
        const datos = {
            id: 3,
            name: "Diego",
            username: "dipaz",
            email: "dipaz@mail.com"
        };
        console.log(datos);
    },3000)
};
peticion()

/*async y await*/
const respuesta = async() => {
    setTimeout(()=>{
        const datos = {
            id: 3,
            name: "Diego",
            username: "dipaz",
            email: "dipaz@mail.com"
        };
        console.log(datos);
    },3000)
};
respuesta().then(console.log)