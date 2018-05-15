const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');

const socketIO = require('socket.io');

const port = process.env.PORT || 3000;

var app = express();
// In express, this is done internally when doing app.listen(...)
var server = http.createServer(app);
// server in which to use web sockets
var io = socketIO(server);

// console.log(__dirname + '/../public');
// console.log(publicPath);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    // socket.emit('newEmail', {
    //     from: "mk@example.com",
    //     text: "Hello",
    //     createdAt: 123
    // });

    // socket.on('createEmail', (email) => {
    //     console.log('Create email', email);
    // });

    socket.emit('newMessage', {
        from: 'alex@sb.com',
        text: 'Hi. I am Alex',
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log('Create message', message);
        
    });
    
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

