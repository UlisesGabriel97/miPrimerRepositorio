function tengoClases(dia) {
	switch (dia) {
		case "lunes" :
		console.log("tenés clases");
		case "miércoles" :
		console.log("tenés clases");
		case "viernes" :
		console.log("tenés clases")
		break;
		default:
		console.log("no tenés clases");
	}
}
tengoClases("lunes")

function noParesDeContarImparesHasta(numero){
    let contador=0
    for (let i=0;i<numero;i+=2){
        contador++
    }
	return contador
}
console.log(noParesDeContarImparesHasta(8))