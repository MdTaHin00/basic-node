import os from 'os';

//* all os methods
console.log(os);

//? value ->  x64 
console.log(os.arch());

//? value -> windows (speed,time,model)
console.log(os.cpus());

//? value -> windows ram (baita)
console.log(os.totalmem());

//? value -> windows ram (bite to convert GB)
console.log(os.totalmem() / (1024*1024*1024));