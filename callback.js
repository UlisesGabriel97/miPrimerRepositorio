function agregarHttp(url) {
    return "http://"+url
}
console.log(agregarHttp("google"));
function procesar(url,agregar){
    for(let i=0;i<url.length;i++){
        url[i] = agregar(url[i])
    }
    return url
}

console.log(procesar(["google","outlook"],agregarHttp))
