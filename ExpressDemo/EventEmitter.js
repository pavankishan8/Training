const emitter = require("events");

const eventClass = new emitter();

eventClass.on("insert", () => {
    console.log("Insertion event was triggered");
})

eventClass.on("delete", () => {
    console.log("Delete event has triggered");
});

eventClass.on("click", (func) => {
   func();
});

eventClass.emit("delete");

eventClass.emit("insert");
eventClass.emit("insert");
eventClass.emit("insert");
eventClass.emit("insert");

function onClick(){
    console.log("The button was clicked");
}
eventClass.emit("click",onClick);