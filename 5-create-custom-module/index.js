import mathematician, { addition, subtraction } from "./math.js";

 const additionMath = addition(10,14);
 // value -> 24
 console.log(" addition ", additionMath);
 

 const subtractionMath = subtraction(30,12);
//  value -> 18
 console.log("Subtraction ", subtractionMath);

 
 const mathDivide = mathematician.divide(30,5);
 // value -> 6
 console.log("math Divide ", mathDivide);

 const mathMultiply = mathematician.multiply(5,6);
 // value -> 30
 console.log("Math Multiple ",mathMultiply);
 
