let text = "El Chihuahua es una de las razas de perro más pequeñas del mundo, su tamaño puede ser igual a la palma de una mano."

function mostrarPalabras(arr, i, callback){
    if (arr.length == i){
        console.log("finalizo")
        console.log(`palabras totales ${arr.length}`)
    }
setTimeout(() =>{
callback(arr[i])
mostrarPalabras(arr,i+1,callback);
},1000 )
}

