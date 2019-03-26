const https = require('https');

const getRepos = (username, done) => {
    if(!username){
        return done(new Error('Need write username'))
    }
    const option = {
        hostname: 'api.github.com',
        path: `/users/${username}/repos`,
        headers: {
            'User-Agent': 'BubentsovKirill'
        }
    }
    const req = https.get(option, res => {
        if(res.statusCode === 200){
            let body = ''
            res.on('data', data => {
                body += data
            })
            res.on('end', () => {
                try {
                    done(null, JSON.parse(body))         
                } catch (error) {
                    done(new Error('Cant parse json value'))
                }
           
            })
        }else{
            done(new Error(`Server didnt take value - ${res.statusMessage}`))
        }
    })

    req.on('error', err => done(new Error('Bad url')))
}

module.exports = {
    getRepos
}