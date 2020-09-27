const os = require("os");

let totalmem = os.totalmem();
let freemem = os.freemem();
let platform = os.platform();
let type = os.type();
let eol = os.EOL;


// console.log({ totalmem, freemem, platform, type, eol });
const operativesystem = { totalmem, freemem, platform, type, eol };
module.exports = operativesystem;