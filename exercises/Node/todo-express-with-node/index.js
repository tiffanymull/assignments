const express = require('express')
const app = express()
// const uuid = require('uuid')
const port = 7777;

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

app.get('/lotr', (req, res)=> {
    res.send(database)
})

app.listen(port, () => {
    console.log(`server is running ${port}`) //<-this is what makes localhost available to, like, postman
})

