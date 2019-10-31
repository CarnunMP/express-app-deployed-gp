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

server.use(express.json());
server.use(cors());

server.get('/api/friends', (req, res) => {
  res.json(friends);
})

server.listen(port, () => {
  console.log(`\n *Server listening on port ${port}* \n`);
})