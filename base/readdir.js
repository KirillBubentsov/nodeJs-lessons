const fs = require('fs');

console.log('Read dir')
fs.readdir(__dirname, (err, contents) => {
    if(err){
        throw err
    }
    console.log(contents);
    console.log('Finish reading');
})