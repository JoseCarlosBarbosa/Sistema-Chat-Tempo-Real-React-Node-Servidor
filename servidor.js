const http = require('http');
const express = require('express');
const aplicacao = express();


const servidorHTTP = http.createServer(aplicacao);
const io = require('socket.io')(servidorHTTP);

aplicacao.use(express.static('public'));

io.addListener('connection', (socket) => {
    console.log("entrou");
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    });
})



servidorHTTP.listen(1000);