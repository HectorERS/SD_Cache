const express = require('express');
const data = require('./data');
const redis = require('redis');

// Initialize App
const app = express();
var redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  db: 0
});

redisClient.on('connect', function () {
  console.log('conectado redis');
});
// Verificar el cache, redis
//redisClient.set("key1", "soy la key1");
//redisClient.get("key1", function(err, value) {
// console.log(value);
//});









// Assign route
app.use('/', (req, res, next) => {
  const filters = req.query;
  const { id } = req.query;
  console.log(id);
  redisClient.exists(id, function (err, reply) {
    if (reply === 1) {
      redisClient.get(id, function (err, value) {
        //console.log(value);
        console.log("fui al cache");
        res.send(value);
      });
    } else {
      const filteredUsers = data.filter(user => {
        let isValid = true;
        for (key in filters) {
          console.log(key, user[key], filters[key]);
          isValid = isValid && user[key] == filters[key];
        };
        return isValid;
      });
      console.log(filters);
      console.log("fui al inventario");
      redisClient.set(id, filteredUsers[0].name);
      res.send(filteredUsers);
    };
  });
});
//antes de buscar directamente en el archivo data, debemos conectar y preguntar en el cache redis

// Start server on PORT 5000
app.listen(5000, () => {
  console.log('Server started!');
});
