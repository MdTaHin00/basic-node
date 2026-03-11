import http from 'http'
import { serialize } from 'v8';

//?  all http methods
console.log(http);


//? server create 
const server = http.createServer((reg,res)=>{
    res.writeHead(200,{'content-type' : 'text/plain'});
    // code run message
    res.end("The Server is this is running...");
})

//? start the server
//*  search -> localhost:4000
server.listen(4000,()=>{
    console.log("The Server is listening");
})
