const fs = require('fs');


const getValue = (flag) => {
    const index = process.argv.indexOf(flag);
    return index > -1 ? process.argv[index + 1] : null;
}

const fileName = getValue('-f');

console.log('Ready')

fs.readFile(fileName, 'utf-8', (err, buffer) => {
    if(err){
        console.log('This file is not exists');
        return false
    }
    console.log(buffer.toString());
    console.log('Finish')
})