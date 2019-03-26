const fs = require('fs');
const getValue = (flag) => {
    const index = process.argv.indexOf(flag);
    return index > -1 ? process.argv[index + 1] : null;
}

const fileName = getValue('-f');
const content = getValue('-c');

fs.writeFile(fileName, content, err => {
    if(err) throw err;
    console.log('File create')
})