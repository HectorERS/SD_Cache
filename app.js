const express = require('express');
const data = require('./data');
const redis = require('redis');

// Initialize App
const app = express();
var redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
  db: 0
});

redisClient.on('connect', function(){
  console.log('conectado redis');
});
// Verificar el cache, redis
//redisClient.set("key1", "soy la key1");
redisClient.get("key1", function(err, value) {
  console.log(value);
});








// Assign route
app.use('/', (req, res, next) => {
  const filters = req.query;
  const filteredUsers = data.filter(user => {
    let isValid = true;
    for (key in filters){
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredUsers);
});
//antes de buscar directamente en el archivo data, debemos conectar y preguntar en el cache redis

// Start server on PORT 5000
app.listen(5000, () => {
  console.log('Server started!');
});
