// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var buffer_pb = require('./buffer_pb.js');

function serialize_userPackage_Buscarresultado(arg) {
  if (!(arg instanceof buffer_pb.Buscarresultado)) {
    throw new Error('Expected argument of type userPackage.Buscarresultado');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userPackage_Buscarresultado(buffer_arg) {
  return buffer_pb.Buscarresultado.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userPackage_Message(arg) {
  if (!(arg instanceof buffer_pb.Message)) {
    throw new Error('Expected argument of type userPackage.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userPackage_Message(buffer_arg) {
  return buffer_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var BuscarService = exports.BuscarService = {
  getServerResponse: {
    path: '/userPackage.Buscar/GetServerResponse',
    requestStream: false,
    responseStream: false,
    requestType: buffer_pb.Message,
    responseType: buffer_pb.Buscarresultado,
    requestSerialize: serialize_userPackage_Message,
    requestDeserialize: deserialize_userPackage_Message,
    responseSerialize: serialize_userPackage_Buscarresultado,
    responseDeserialize: deserialize_userPackage_Buscarresultado,
  },
};

exports.BuscarClient = grpc.makeGenericClientConstructor(BuscarService);
