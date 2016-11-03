var http = require('http');
//Cargando configuraciones
var config = require('./config/config.js');
var PORT = config.PORT;
var IP = config.IP;
var fs = require('fs');

//Para importar los colores
//Tema de colors....
//colors.setTheme(config.color_theme);

//Agregar paqueteria de colores
var colors = require('colors');
colors.setTheme({
    "info":"rainbow",
    "data":"green",
    "error":"red"
});
//req       peticion
//res       respuesta
var server = http.createServer(function(req, res){
    var path = req.url;
    if(path == '/'){
        path = './static/index.html';
    }else{
        path = './static'+ path;
    }
    console.log(`Recurso solicitado: ${path}`.data);
    //Codigo que ejecuta nuestro server cada que se le ingresa una peticion
    // res.writeHead(200,{
    //     'Content-Type':'text/html'  
    // });
    var extension = path.split(".")[2];      
            switch(extension){
                case 'html':
                    res.writeHead(200,{
                        "Contenr-Type":"text/html"
                    });
                break;
                case 'js':
                    res.writeHead(200,{
                        "Contenr-Type":"text/javascript"
                    });
                break;
                case 'css':
                    res.writeHead(200,{
                        "Contenr-Type":"text/css"
                    });
                break;
            }
    fs.readFile(path,'utf8',function(err, content){
        if(err){
            console.log(`Error al leer archivo ${err}`);
            //decidiendo el content type de la extension del archivo solicitado
            res.writeHead(500,{
                "Contenr-Type":"text/plain"
            });
            res.end('Error 500: Internal Error...'.error);
        }else{
            //Sirve el archivo
            console.log(">Se sirve el archivo: ./static/index.html".info);
            res.end(content);
        }
    });
});

server.listen(PORT, IP, function(){
    console.log(`>Server woorking @http://${IP}:${PORT}`);
    //Agregar colores en consola
    //console.log(`>Server woorking @http://127.0.0.1:3000`.info);
});