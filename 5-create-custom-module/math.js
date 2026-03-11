export function addition (first,second){
   return first + second ;
}


export function subtraction (first , second){
   return first - second
}


const multiply =(first,second)=>{
   return first * second ;
} 

const divide = function(first,second){
  return first / second ;
}

const mathematician = {multiply,divide};

export default mathematician;