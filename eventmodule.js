import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("waterFull", () => {
  console.log("Please turn off the motor.");
  setTimeout(() => {
    console.log("Please turn off the motor. Its a gentle reminder.");
  }, 3000);
});
console.log("The Script is running.");
myEmitter.emit("waterFull");
console.log("The Script is still running.");
