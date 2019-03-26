const fs = require('fs');

fs.writeFile('note.txt', 'Hello NodeJs.', err => {
    if(err){
        throw err;
    }
    fs.readFile('note.txt', (err, buffer) => {
        if(err){
            throw err
        }
        console.log('Create file.')
        console.log(buffer.toString());
        fs.appendFile('note.txt', ' Append some text.', err => {
            if(err){
                throw err
            }
            console.log('Append text to file.')
            fs.readFile('note.txt', (err, buffer) => {
                if(err){
                    throw err
                }
                console.log(buffer.toString());
            })
        })
    })
})