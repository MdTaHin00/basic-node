import fs from 'fs';

// create a readable stream 

// lorem.txt file data read
const readableSteam = fs.createReadStream('lorem.txt',{
    // buffer code na asa
    encoding:'utf-8',
    // text hight
    highWaterMark:1024,
})

// data -> data check 
readableSteam.on('data',(chunk)=>{
    console.log(`Received chunk : ${chunk}`);
})

// end -> data completed and code end
readableSteam.on('end',()=>{
    console.log("File reading Finishing");
})