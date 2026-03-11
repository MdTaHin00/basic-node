import http from 'http';

//*  create server
const  server = http.createServer((req,res)=>{
    //set response 
    //    200 start code
    res.writeHead(200,{'content-type':'text/plain'});
    // server page send response code
    res.end("welcome to node page");
});


//  search server code
const pot = 3000;

// server start tai listen kola
server.listen(pot,()=>{
    console.log(`the server is running port ${pot}`);
})

