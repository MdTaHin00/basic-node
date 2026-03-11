//? terminal code run -> node ai file + enter
import { readFile } from 'node:fs';
import { writeFile } from 'node:fs';

//! node async function hoy code run kola

//* exmple.text  file code ai file run kola
//* utf-8 -> buffer value na hoy = string value 
readFile('exmple.text', 'utf-8',(err,data)=>{
 if(err){
 throw err;
 }
 //* buffer value asba
 console.log(data);
})


//?  write text into file 
const context = 'Hello Node.js add new value . Add new file and text';
writeFile('message.text',context,'utf-8',(err)=>{
   if(err) throw err ;
   console.log("File Created done.");
})

