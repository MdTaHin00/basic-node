import { Duplex } from 'stream'

const duplexStream = new Duplex({
     write(chunk,encoding,callback){
        console.log(`Writing: ${chunk.toString()}`);
        callback()
     },

     read(){
        // text make 
        this.push("Hello from duplex \n ");
        this.push("Hello from duplex two");
        this.push(null);
     }

})

// readable method
duplexStream.on('data',(chunk)=>{
    console.log(`Reading: ${chunk.toString()}`);
})

// write method
duplexStream.write("This is a test writing ..");
duplexStream.end('Writing End Method');
