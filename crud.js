const db = require('./myDatabase');

//Create sets
const createSets = (name, description, callback) => {
    const sql = 'INSERT INTO users ( name, description) VALUES (?, ?, ?)'
    db.ruh(sql, [name, description], function(err){
        callback(err, {id:this.lastID})
    })
}

//Read sets
const readSets = (callback) => {
    const sql = 'SELECT * FROM sets';
    db.all(sql, [], callback)
}
//Update sets
const updateSets = (id, name, description, callback ) => {
    const sql = 'UPDATE sets SET name =?, description ? WHERE id = ?'
    db.run(sql, [name, description], callback)
}
//Delete sets
const deleteSets = (id, callback) => {
    const sql = 'DELETE FROM sets WHERE id = ?'
    db.run(sql, id, callback)
}

module.exports = {createSets, readSets, updateSets, deleteSets}


