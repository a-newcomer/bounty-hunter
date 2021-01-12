//const { uuid } = require("uuidv4");
const { v4: uuid } = require('uuid')


//const uuid = require('uuidv4')


let bounties = [
    {
        firstName: "Padme",
        lastName: "Amidala",
        price: 900,
        alive: false,
        type: "unknown",
        _id: uuid()
    },
    {
        firstName: "The Child,",
        lastName: "aka Baby Yoda",
        price: 1000,
        alive: true,
        type: "neither",
        _id: uuid()
    },
    {
        firstName: "Ashoka",
        lastName: "Tano",
        price: 50,
        alive: true,
        type: "jedi",
        _id: uuid()
    },
    {
        firstName: "Han",
        lastName: "Solo",
        price: 120,
        alive: true,
        type: "neither",
        _id: uuid()
    },
    {
        firstName: "Ziro",
        lastName: "the Hutt",
        price: 45,
        alive: true,
        type: "neither",
        _id: uuid()
    }
] 

module.exports = bounties