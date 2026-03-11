import http from 'http';

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
     // url -> object name
    const {url} = req;

    if(url === '/'){
        res.end("Welcome to Home Page")
    }else if(url === "/about"){
        res.end("about page");
    }else if(url === "/contact"){
        res.end("contact page");
    }else if(url === '/blogs'){
        res.end("Blogs Page");
    } // /blogs/ -> al polar code 
    else if(url.startsWith("/blogs/")){
        //  (/) base kola array make & 2 -> 2 num array call
        // /blogs/ -> polar code 
      const postId = url.split("/")[2];
      res.end(`"id": ${postId}, "Title":"Post Title"`)
    }
    else{
        res.end("404 - Not Found");
    }
});

let pot = process.env.PORT || 3000;

server.listen(pot,()=>{
    console.log(`SuccessFully Running ${pot}`);
    
})