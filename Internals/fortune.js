// mofulos. 
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

module.exports = {
    "getFortune" : function(cb){
       
        mongoClient.connect("mongodb://127.0.0.1:27017/fortuneapp",// conecta a la base de datos recuerda el puerto es 27017
        function(err, db){  
            if(err){  // si no se conecta a la bsae de datos manda en consola el siguiente error.
                console.log(">Error al intentar conectarme  a la base de datos: mongodb://127.0.0.1:27017/fortuneapp");
                var fortunePaper = { // tambien si no te conectas a la base de datos manda este mensaje siguiente
                    "message":
                    "El ser humilde en todo momento te llevara al exito."
                };
            
                var fortunePaperResp = JSON.stringify(fortunePaper);
                //--ahora es el callback tiene parametro fortunerespuesta
                cb(fortunePaperResp);
            }else{
               
                var papersCollection = 
                db.collection("papers"); 
             
                var objetoRestultado = 
                papersCollection.find({});  //;
                
                objetoRestultado.toArray(function(err, papers){
                    var randomIndex = 
                    Math.round(Math.random(0)* papers.length);
                    console.log("> aleatorios: " + randomIndex);
                    var fortunePaperResp = 
                    JSON.stringify(papers[randomIndex]);
                    db.close();
                    console.log(">Mi fortuna es: " + fortunePaperResp);
                    cb(fortunePaperResp);
                });
            }
        });
    }
};

