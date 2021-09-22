var messages = require('./helloworld_pb');
var services = require('./helloworld_grpc_pb');
var grpc = require('@grpc/grpc-js');




function main() {
  var server = new grpc.Server();
  server.addService(services.Buscar,{});
  server.bindAsync('0.0.0.0:5000', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();
