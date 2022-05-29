if("serviceWorker" in navigator){
    console.log("si existe");
}
if(navigator.serviceWorker){
    console.log("si existe");
    //navigator.serviceWorker.register("./serviceWorker.js") //registrar un servicWorker o sw
    navigator.serviceWorker.register("./sw.js") //registrar un servicWorker o sw
}