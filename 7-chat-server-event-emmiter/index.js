import EventEmitter  from 'node:events'

const eventEmitter = new EventEmitter();

function createServer(){

    //connect user to sever 
    function connect(user){
       console.log(`${user} is connecting .`);
       eventEmitter.emit('userConnecting',user);
    }

    //  disconnect user server 
    function disconnect(user){
        console.log(`${user} is disConnecting . `);
        eventEmitter.emit('userDisconnecting')
    }

    return{
        connect,
        disconnect,
        on:eventEmitter.on.bind(eventEmitter),
        emit:eventEmitter.emit.bind(eventEmitter),
    }

}

    //create server instance 
    const chatServer = createServer();

    // registering listeners
    chatServer.on('userConnecting',(user)=>{
        console.log(`Welcome to ${user}`);
    })

      // dis registering listeners
    chatServer.on('disConnecting',(user)=>{
        console.log(`${user} is DisConnecting `);
    })


    // simulate events
    chatServer.connect("Jihad");

    chatServer.disconnect("Jihad")

  

    //?  value 
 // Jihad is welcome 
 // Jihad is disconnecting 
