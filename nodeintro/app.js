const EventEmitter = require("events");
const os = require("os");
const path = require("path");
var pathObj = path.parse(__filename);
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
   if(req.url === "/"){
       res.write("Hello world");
       res.end();
   }

   if(req.url === "/api/courses"){
       res.write(JSON.stringify([1,2,3,4,5]));
       res.end();
   }
});

server.listen(3000);

console.log("listening on port 3000...");

// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("messageLogged", (arg) => {
//     console.log("Listener called", arg);
// });

// logger.log("message");

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// // console.log("Total memory " + totalMemory);

// // console.log(`Total memory ${totalMemory}`);
// // console.log(`Free memory ${freeMemory}`);

// // var files = fs.readdirSync("./");
// // console.log(files);

// fs.readdir("./", function (error, data) {
//     if (error) {
//         console.log("error", error);
//     }
//     else {
//         console.log(data);
//     }
// });