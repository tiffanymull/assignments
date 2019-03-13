const express = require('express')
const app = express()
const uuid = require('uuid')
const port = 7777;

app.use(express.json()) //<--makes body manifest. must make use of. 

//had to rename this to index.js bc package.json references that. 

const database = [
    {
        name: 'Gandalf',
        ancestry: 'Human',
        weapon: 'Magic',
        _id: 1
    }, {
        name: 'Bilbo',
        ancestry: 'Hobbit',
        weapon: 'Sting',
        _id: 2
    }, {
        name: 'Galadriel',
        ancestry: 'Elf',
        weapon: 'Magic',
        _id: 3
    }, {
        name: 'Gollum',
        ancestry: 'River Creature',
        weapon: 'Teeth',
        _id: 4
    },
]

app.get('/lotr', (req, res) => {
    res.send(database)
})

app.post('/lotr', (req, res) => {
    // console.log(req)
    const newObj = req.body;  //<- creating a new object so you can post
    //    console.log(req.body)
    newObj._id = uuid.v4();  //<-give it an id using the package installed
    database.push(newObj)        //<-so that it gets added to the database
    res.send(newObj)                //<--works now. just leaves when refresh bc not saving to actual database
})

app.listen(port, () => {
    console.log(`server is running ${port}`) //<-this is what makes localhost available to, like, postman
})

app.put