let autos = require("./autos")
let personas=require("./personas")

const concesionaria = {
    autos: autos,
    buscarAuto: patent => {
       let auto = autos.find(auto => auto.patente === patent)
       if (auto){
          return auto
       }else{
          return null
       }
    },
    venderAuto: function(patente){
        return this.buscarAuto(patente).vendido=true
    },
    autosParaLaVenta: () => autos.filter(auto =>{
       return auto.vendido===false
    }),
    autosNuevos: function () {
        return this.autosParaLaVenta().filter(auto => {
            return auto.km <= 100
        })
    },
    listaDeVentas: function () {
        let precios = []
        autos.forEach(auto => {
            if (auto.vendido === true) {
                precios.push(auto.precio)
            }
        })
        return precios
    },
    totalDeVentas: function(){
        let precios= concesionaria.listaDeVentas()
        if (precios.length===0){
            return 0
        }else{
        return precios.reduce((acum,precio) => acum+ precio)
     }
    },
    puedeComprar: function(auto,persona){
       let valorDeCuota = auto.precio/auto.cuotas
       if((valorDeCuota<=persona.capacidadDePagoEnCuotas)&&(auto.precio<=persona.capacidadDePagoTotal)){
          return true
       }else{
          return false
       }
    },
    autosQuePuedeComprar: function(personas){
       let autosQuePuede=this.autosParaLaVenta().filter(auto=>{
          return this.puedeComprar(auto,personas)
       })
       return autosQuePuede
    }
};
console.log(concesionaria.autosQuePuedeComprar(personas[0]));