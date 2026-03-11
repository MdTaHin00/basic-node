import { Transform } from 'stream';

const transformStream = new Transform({
     transform(chunk, encoding ,callback){
         this.push(chunk.toString().toUpperCase())
         callback();
     }
})

// pipe code join karen to read from stdin and write to stdout
process.stdin.pipe(transformStream).pipe(process.stdout);


// terminal text Lowercase  input value uppercase