require('dotenv').config(); 

const server = require('./server');

const PORT  = process.env.PORT || 8116; 

server.listen(PORT, () => console.log("El servidor está corriendo"));