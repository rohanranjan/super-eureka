var fs = require("fs");
var readStream = fs.createReadStream(__dirname + "/foo.txt");
var writeStream = fs.createWriteStream(__dirname + "/boo.txt");
readStream.pipe(writeStream);