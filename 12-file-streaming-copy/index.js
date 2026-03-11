import fs from 'fs';

// create readable and writeable 
 const source =  fs.createReadStream('lorem.txt');
 const copyFileText = fs.createWriteStream('copy-lorem.txt')

 let  totalBytes = 0 ;

 // pipe the readable stream into writeStream 
 // pipe -> file join
 source.pipe(copyFileText);

 // data length check
 source.on('data',(chunk)=>{
    totalBytes += chunk.length;
    console.log(`Copy text length ${totalBytes}`);
    
 })

 source.on('end',()=>{
    console.log('File copy successfully');
 })