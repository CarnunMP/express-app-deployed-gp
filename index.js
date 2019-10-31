require('dotenv').config();

const express = require('express');
const cors = require('cors');

const server = express();
const port = process.env.PORT;
const friends = [
  { id: 1, name: 'Shaun'},
  { id: 2, name: 'Megan'},
  { id: 3, name: 'Pere'},
];

server.use(express.static(__dirname + '/client/build'));
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
})

server.get('/api/friends', (req, res) => {
  res.json(friends);
})

server.listen(port, () => {
  console.log(`\n *Server listening on port ${port}* \n`);
})