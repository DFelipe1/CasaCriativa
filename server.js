const express = require('express');
const server = express();
const db = require('./Database/db')






server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})



server.get("/", function(req, res) {

    db.all(`SELECT * FROM ideias`, (err, rows) => {
        if(err) return console.error(err)
    

        const reversedIdeas = [...rows].reverse()
        let lastIdeas = []
        for(idea of reversedIdeas){
            if(lastIdeas.length < 3) {
                lastIdeas.push(idea)
            }
        }
        
        return res.render("index.html", {ideas: lastIdeas})
    })


    
})

server.get("/ideias", function(req, res) {

    db.all(`SELECT * FROM ideias`, (err, rows) => {
        if(err) return console.error(err)
    

        const reversedIdeas = [...rows].reverse()
        return res.render("list-ideia.html", {ideas: reversedIdeas})
    })
    
})

server.post("/", (req, res) => {

    
    const query = `
        INSERT INTO ideias(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]

    for(value of values) {
        if(value == ""){
            return res.redirect('/ideias')
        }
        value = value.trim()

    }
    db.run(query, values, (err) => {
        if (err) return console.log(err)


       
        return res.redirect('/ideias')
    })
})

server.listen('3000')