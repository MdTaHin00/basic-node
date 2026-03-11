#!/usr/bin/env node
//  ai formate ata first code kolta hova 

//terminal call -> npm install -g


//? add value package.json ->  
//  "bin":{
//      "18-cli-tolls":"index.js"
//  }, 


//command line arguments (process.argv)

const args = process.args.alice(2);

if(args.length === 0){
    console.log("Usage this command : cli-tools name");
}else{
    console.log(`Hello,${args[0]}! Welcome to the CLI tool`);
    
}


import redline from 'readline';
console.log(redline);
