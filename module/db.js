const users = require('./users.json');

const getUsers = () => {
    return users
}

module.exports.getUsers = getUsers;

console.dir(module)