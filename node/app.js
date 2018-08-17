var grpcExpress = require('grpc-express');
var express = require('express');
var app = express();
var grpc = require('grpc');
var PROTO_PATH = __dirname  + '/node.proto';


function sayHello(call, callback) {
    callback(null, {message: 'Helloooo ' + call.request.name});
}

var hello_proto = grpc.load(PROTO_PATH).helloworld;
var server = new grpc.Server();
server.addProtoService(hello_proto.Greeter.service,{sayHello: sayHello});
server.bind('0.0.0.0:5000', grpc.ServerCredentials.createInsecure());
app.use(grpcExpress(server));

app.listen(3000 , () => {
    console.log("Server Is Up And Running !...");
})