import http from 'http';

const server = http.createServer((req,res)=>{
    console.log(`Welcome :`,req.method);
    res.writeHead(200,{'content-type':'text/plain'});

// set handel request base on request method
  if(req.method === "GET"){
    res.end("You made a get method");
  } else if (req.method === "POST") {
    res.end("You made a post method");
  } else if(req.method === "PUT"){
     res.end("You made a put method");
  }
    res.end("404 - not found");
})


const port = 3000;


server.listen(port,()=>{
    console.log(`server is running port : ${port}`);
})
