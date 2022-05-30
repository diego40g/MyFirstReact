//XMLHttpRequest() //uso de ajax
/* Arquitectura usando SOAP
<xml>Contenido</xml>*/

/*Arquitectura Rest usando JSON*/
/*{nombre:"Diego"}*/

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response)=>{
        console.log(response);
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    });