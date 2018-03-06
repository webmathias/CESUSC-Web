/**
 * Created by mathias on 3/1/18.
 */
const express = require('express');
const bodyParser = require('body-parser');
console.log("iniciando");
let server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
let array = [];
server.get('/', (req, res) => {
    res.send(JSON.stringify(array));
});

server.use(function (req, res, next) {
    //Console.log(req);
    //req.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", ["OPTIONS", "GET", "POST", "DELETE", "PUT"]);
    next();
});

const user = require('./user');

server.use('/user', user);


server.listen(3001);