const sqlite = require('sqlite3');
const db = new sqlite.Database('./ws.db')

db.serialize(() => {


    db.run(`
    CREATE TABLE IF NOT EXISTS ideias(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );
    `)
    


    

    // db.all(`SELECT * FROM ideais`, (err) => {
    //     if (err) return console.log(err)
    // })
})

module.exports = db