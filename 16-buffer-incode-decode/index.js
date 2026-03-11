
//* make a buffer code 
const buffer = Buffer.from("Hello Word", 'utf-8');
console.log(buffer);

//* buffer to string convat
console.log(buffer.toString());

//*  encoding buffer ('uft-8',"base64")
 const bufferUft8 = Buffer.from("hello", "utf-8");
 console.log(bufferUft8);
 
//* converting buffer to base64
const bufferBase64 = bufferUft8.toString('base64');
console.log(bufferBase64);
 

//*  decoding base64 back to original string
const decodingBuffer = Buffer.from(bufferBase64,'base64');
console.log(decodingBuffer.toString('utf-8'));

  