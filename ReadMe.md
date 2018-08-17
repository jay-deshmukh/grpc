

- Client App can directly call a method on a server application on a remote machine as if it was a local object making it easy to create distributed applications and services 

- Methods can be called remotely with their parameters and return types 

- gRPC handle client calls 

- client has a `stub` that provides the clone of the method that's available on the server 

- uses `protocol buffer` 

``` 

    ---- How Protocol Buffer Works ----
    "Used to Serialize the Structured Data"
    1. You need to define the structure of the data you want to serialize with a .proto extension 
    2.Structure data as a message where each message is a small logical record of info containing the name-value pairs called fields 
    3.Use protocol buffer compiler protoc to generate data access classes (i.e the compiler generates the class for the mentioned message/structure/service with appropriate methods (having return type as protocol buffer messages))

    For More :- 
    - https://developers.google.com/protocol-buffers/docs/overview
    - https://grpc.io/docs/guides/

```

