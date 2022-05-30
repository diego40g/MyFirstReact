// const sumar=new Promise( (resolve,reject) => {...})
/*
resolve: se resuelve 
reject: si no cumple devuelve el valor de string
*/ 

const sumar=(a,b)=>{
    return new Promise((resolve,reject)=>{
        if(a<0 || b<0){
            reject("Solo usar números positivos")
        }else{
            resolve(a+b)
        }
    });
}
const result=sumar(-63,10).then((res)=>{
    console.log(res);
    document.write(res)
})
.catch((err)=>{
    console.log(err)
    document.write(err)
});