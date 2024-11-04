const sqlite3 = require('sqlite3').verbose();
const dbName = './myDatabase.db';

let db = new sqlite3.Database(dbName, (err) => {
    if (err){
        console.error("Error opening database" + err.message);
    }else{
        console.log("Connected to database.");

db.run('CREATE TABLE IF NOT EXISTS sets (id INTEGER PRIMARY KEY AUTOINCREMENT , name TEXT NOT NULL, description);');
db.run('CREATE TABLE IF NOT EXISTS sets (id INTEGER PRIMARY KEY AUTOINCREMENT , name TEXT NOT NULL, description);');
    
    }
})

module.exports = db;
