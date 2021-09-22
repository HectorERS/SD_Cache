# SD_Cache
tarea cache sistema distribuidos
instalar EXPRESS Y REDIS 
#npm install express redis
tener ejectuando redis server y ejectuar app.js
configuracion de redis: config set maxmemory 20M, config set maxmemory-policy volatile-lru
la busqueda se realiza al archivo "data.js"

#grcp
Se confgura "buffer.proto" con el servicio y luego se ejectura el siguiente comando
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../cache/ --grpc_out=grpc_js:../cache buffer.proto
#No funcional, problemas con la implementacion.

#Funcional
Consultar "http://localhost:5000?id=2" y va a buscar a cache si esque existe, de lo contrario va a "data.js" y muestra el valor y agrega al cache la llave-valor.




# Using Docker Compose

Run `docker-compose up` to build and run the docker containers

