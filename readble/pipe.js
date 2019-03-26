const fs = require('fs');

const input = fs.createReadStream('lorem.txt');
const output = fs.createWriteStream('lore2.md');

input.pipe(output);