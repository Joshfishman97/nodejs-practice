//CLASS DEFINES BEHAVIORS
const EventEmitter = require("events");;
//OBJECT Instance of Class
const emitter = new EventEmitter();

//Register a listener
emitter.on("messageLogged", (e) => {
  console.log("Listener Called", e);
});

const log = require('./logger')
log('message')

  