const fs = require("fs");

const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

const list = (done) => {
    load(done)
}

const view = (title, done) => {
    load((err, notes) => {
        if(err){
            return done(err)
        }
        const note = notes.find(note => note.title === title);
        if(!note){
            return done(new Error('Note is not find'))
        }
        done(null, note)
    })
}

const create = (title, content, done) => {
    load((err, notes) => {
        if(err){
            return done(err)
        }      
        content = content ? content : 'Some text.'
        notes.push({ title, content });
        save(notes, done)
    })
}

const remove = (title, done) => {
   load((err, notes) => {
        if(err){
            return done(err)
        }

        notes = notes.filter(note => note.title !== title);
        save(notes, done)
    })
}

const load = (done) => {
    fs.readFile('notes.json', (err, data) => {
        if(err){
            if(err.code === 'ENOENT'){
                return done(null, [])
            }else{
                return done(err)
            }
        }
        try {
            const notes = JSON.parse(data);
            done(null, notes)
        } catch (err) {
            done(new Error('Dont try read file'))
        }       
    })
}

const save = (notes, done) => {
    try {
        const json = JSON.stringify(notes);
        fs.writeFile('notes.json', json, err => {
            if(err){
                return done(err)
            }
            done()
        })
    } catch (err) {
        done(err)
    }
}

switch(command){
    case 'list':
        list((err, notes) => {
            if(err){
                return console.error(err.message)
            } 
            notes.forEach((note, index) => {
                console.log(`${index + 1}. ${note.title}`)
            });

        });
        break;
    case 'view':
        view(title, (err, note) => {
            if(err) return console.error(err.message)
            console.log(`# ${note.title} \r\n\r\n --- \r\n\r\n${note.content}`)
        });
        break;
    case 'create':
        create(title, content, err => {
            if(err){
                return console.error(err.message)
            }
            console.log("Note created")
        })
        break;
    case 'remove':
        remove(title, err => {
            if(err){
                return console.error(err.message)
            }
            console.log(`Note ${title} removed`)
        })
        break;
    default:
        console.log('Dont known command')
}

