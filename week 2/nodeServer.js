const osinfo = require("./osinfo");
const http = require('http');
const dos = require("./dosDetector");

const dosDetector = new dos(1000);

const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    //Return a response with OS-info, using the code implemented in part-a
    res.write(JSON.stringify(osinfo));
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  dosDetector.addUrl(sock.remoteAddress);
  // dosDetector.on("detected", eventArg => {
  //   console.log(
  //     `DOS Detected: ${eventArg.url} Time Between Calls: ${eventArg.TIME_BETWEEN_CALLS}`
  //   )
  // });

});
server.listen(3000);
console.log('listening on 3000');
dosDetector.on("detected", eventArg => {
  console.log(
    `DOS Detected: ${eventArg.url} Time Between Calls: ${eventArg.TIME_BETWEEN_CALLS}`
  )
});
//Register for the "DosDetected" event and console.log the url and time info.