#!/usr/bin/env node

// ai file code anno file use tai
// terminal call -> npm link

console.log("hello");

export const sum = (a,b)=>{
   return a + b ;
}

export const division = (a,b)=>{
  return a * b ;
}

export const multiplier = (a,b)=>{
   return a / b;
}

export default{sum,division,multiplier}