import path from 'path';
import { fileURLToPath } from 'url';

//?  all path modules run 
console.log(path);

//?  basename -> url last name
// * run code -> myfile.node.js
console.log('Basename:',path.basename("C:\\temp\\myfile.node.js"))

//? my windows file path run 
// value -> D:\Udemy-CLASS\Node.js(Backend)\2-path\app.js
const fileName = fileURLToPath(import.meta.url);
console.log(fileName);

//?  my windows dirname run
// value -> D:\Udemy-CLASS\Node.js(Backend)\2-path
const dirname = path.dirname(fileName);
console.log(dirname);

//? join ->  folder name & file name create
// value -> D:\Udemy-CLASS\Node.js(Backend)\2-path\example\output.txt
const fullPath = path.join(dirname,'example','output.txt');
console.log(fullPath);

//? extname -> path extname run 
// value  -> js
const extName = path.extname(fileName);
console.log("File Ext Name" , extName);
