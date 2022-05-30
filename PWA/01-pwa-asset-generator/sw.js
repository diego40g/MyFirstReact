console.log("registrado")
const CACHE_ELEMENTS=[
    "./",
    "https://unpkg.com/react@18/umd/react.production.min.js",
    "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js"
]

const CACHE_NAME="v1_cache_contador_react";

/*self es igual a this*/
self.addEventListener("install", (e)=> {
    //console.log(e);
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then(()=>{
                self.skipWaiting()
            }).catch(console.log)
        })
    )
});


self.addEventListener("activate",(e)=>{
    const cacheWitheList=[CACHE_NAME];
    e.waitUntil(
        caches.keys().then((cacheNames)=>{
            //console.log(cacheNames);
            return Promise.all(cacheNames.map((cacheName) => {
                return cacheWitheList.indexOf(cacheName) == -1 && caches.delete(cacheName)
            }))
        }).then(() => self.clients.claim())
    );
})

self.addEventListener("fetch",(e)=>{
    //console.log(e);
    //console.log(e.request);
    e.respondWith(()=>{
        //caches.match(e.request).then((res)=>(res ? res : fetch(e.request)));
        caches.match(e.request).then((res)=>{
            if (res){
                return res;
            }
            return fetch(e.request);
        })
    })
})