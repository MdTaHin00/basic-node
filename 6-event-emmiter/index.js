import EventEmitter from 'node:events'

// event emitter class defiant call
const eventEmitter = new EventEmitter();

// event make 
eventEmitter.on('state',()=>{
    console.log("The event is started");
})

// event call
eventEmitter.emit('state');



eventEmitter.on('second',(value1,value2)=>{
     const result = value1 + value2
   console.log(`This is result ${result} `);
})

// first name -> event call name 
// second  & third -> pramiter number 
eventEmitter.emit('second',20,10)