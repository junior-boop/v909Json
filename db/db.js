const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapte = new FileSync('db.json');
const db = low(adapte)


module.exports = db