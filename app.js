//CLASS DEFINES BEHAVIORS
const EventEmitter = require('events')
//OBJECT Instance of Class
const emitter = new EventEmitter ()

//Register a listener
emitter.on('messageLogged',function(){
    console.log('Listener Called');
})

//Raise an Event
emitter.emit('messageLogged');