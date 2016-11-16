var path = require('path'),
     fs = require('fs');
//Creando manejadores. Los manejadores son somples funciones. 

var _getAuthor = function(req,res){
    res.end("Autor: David.");
};

var _getFortune = function texto_aleatorio(req,res){
    //res.end("Si quieres ser feliz debes comer mucho :D");

   var fortunas = new Array() 
   res.end(fortunas[0] = "Si la felicidad quieres encontrar a tu admirador debes amar." );
   res.end(fortunas[1] = "Distribuimos en todo el mundo con los mejores tiempos de    entrega y fiabilidad de los envíos." );
   res.end(fortunas[2] = "No tenemos competidores que nos hagan sombra. Contrate con    nosotros y compuébelo. Así de fácil." );
   res.end(fortunas[3] = "Disponga del mejor servicio de atención al cliente y una    respuesta rápida a sus problemas." );
   res.end(fortunas[4] = "Los mejores servicios, productos y, como no, los menores    precios. Todo son ventajas." );
   aleat = Math.random() * (fortunas.length) 
   aleat = Math.floor(aleat) 
   document.write(fortunas[aleat])

}
 


// ----
// objeto manejador.

var handler = {};
// Registro de manejadores en el objeto manejador. 
handler["/getauthor"] = _getAuthor;
module.exports = handler;

handler["/getfortune"] = _getFortune;

 