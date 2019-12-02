'use strict'

var express = require('express'),
    app = express();

    app.set('views', 'views');
    app.set('view engine', 'jade');

    app.get('/', function(res,req){
        res.render('home',{
        });
    });

    app.listen(8080);
    module.exports.getApp = app;