const DOS = require("./dosDetector");
const dos = new DOS(3000);

dos.addUrl("www.dr.dk");
dos.on("detected", (data) => {
    console.log(`possible DOS attack detected from ${JSON.stringify(data)}`);
});

setTimeout(() => {
    dos.addUrl("www.dr.dk");
}, 2000);