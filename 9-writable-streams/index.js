import fs from 'fs';

// output -> output.txt file 
const writeAbleStream = fs.createWriteStream('output.txt');


//writing data in chunks

writeAbleStream.write("This is chunks number 1.\n");
writeAbleStream.write("This is chunks number 2.\n");
writeAbleStream.write("This is chunks number 3.\n");
writeAbleStream.write("This is chunks number 4.\n");
writeAbleStream.write("This is chunks number 5.\n");
writeAbleStream.write("This is chunks number 6.\n");

// writing end chunks
writeAbleStream.end("This is final chunk");

writeAbleStream.on('finish',()=>{
    console.log("Finished Writing ...");
})