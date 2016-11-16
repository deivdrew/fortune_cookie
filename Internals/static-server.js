var fs = require('fs'),
    mime = require('mime'),
    path = require('path'),
    config = require('../config/config.js');
    

exports.serve = function (url, res) {
    var urlpath = path.resolve(config.STATIC_PATH + url);
    console.log(`>Recusrso Solicitado: ${urlpath}`);


    fs.exists(urlpath, function (exists) {
        if (!exists) {
            //No existe 
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.end('<h1>404 Not Found</h1>')
        } else {
            //existe
            // Decidiendo el conetent-Type enfuncion de la extencion del archivo solicitado
            var mimeType = mime.lookup(urlpath);
            fs.readFile(urlpath,
                function (err, Content) {
                    if (err) {
                        console.log(`> Error al leer archivo: ${err}`);
                        res.writeHead(500, {
                            'Content-Type': 'text/plain'
                        });
                        res.end("Error 500: Iternal Error...");
                    } else {
                        //TODO: si sirve el archivo
                        res.writeHead(200, {
                            'Content-Type': mimeType
                        });
                        console.log(`>Se sirve el archivo: ${path}`);
                        res.end(Content);
                    }
                });
        }
    });

};