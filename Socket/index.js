import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  }
});

let onlineUsers = []

const addNewUser = (userName, socketId) => {
  !onlineUsers.some((user) => user.userName === userName) &&
  onlineUsers.push({userName, socketId})
}

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId)
}

const getUser = (userName) => {
  return onlineUsers.find((user) => user.userName === userName)
}

io.on('connection', (socket) => {

  io.emit('hello', {message: 'Hello client'});

  io.on('newUser', (userName) => {
    addNewUser(userName, socket.id);
  })

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
    removeUser(socket.id)
  });
});

io.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
