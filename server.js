var http = require('http');
var colors = require('colors');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var staticServer = require('./Internals/static-server.js');
var handlers = require('./Internals/handlers');

//cargando configuraciones
var config = require('./config/config.js');
var IP = config.IP;
var PORT = config.PORT;
// tema de colors
//color_theme.setTheme(config.color_theme);
var server = http.createServer(function (req, res) {
    //extrayendo el path de la URL
    var urlpath = req.url;
    // normalizando el path en caso de no se pidea ningun recurso  
    if(urlpath==="/"){
        urlpath =("/index.html");
    }
     if (typeof(handlers[urlpath]) === "function"){
         handlers[urlpath](req,res);
     }else {
        //se llama al servidor estatico
        staticServer.serve(urlpath,res);
     }
    

       
});
server.listen(PORT, IP, function () {
    console.log(`> Server working @http://${IP}:${PORT}/`)
});