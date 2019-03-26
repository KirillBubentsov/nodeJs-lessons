const fs = require("fs");

const streamRead = fs.createReadStream("lorem.txt");
const streamWrite = fs.createWriteStream("lorem.md");

streamRead.on("data", part => {
    streamWrite.write(part)
});

streamRead.on("error", err => {
  console.log("Error", err.message);
});
