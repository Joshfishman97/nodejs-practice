//CLASS DEFINES BEHAVIORS
const { on } = require("events");
const EventEmitter = require("events");
const { url } = require("inspector");
//OBJECT Instance of Class
const emitter = new EventEmitter();

//Register a listener
emitter.on("messageLogged", (e) => {
  console.log("Listener Called", e);
});

//Raise an Event
emitter.emit("messageLogged", { id: 1, url: "http://" });

//raise: logging (data:message)
emitter.on("logging", (e) => {
    console.log("Listener Called", e);
  });

  emitter.emit("logging", { id: 1, url: "http://" });