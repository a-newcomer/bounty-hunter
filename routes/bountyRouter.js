const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')

//Get all bounties
bountyRouter.get("/",(req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})
//enter this query string in postman or front-end for below: type?type=chosenType
bountyRouter.get("/type", (req, res, next)=> {
    Bounty.find({type: req.query.type},
        (err, bountyTypes) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bountyTypes)
        })
    /*const type = req.query.type
    if(!type){
        const error = new Error("No type. Did you enter the type?")
        res.status(500)
        return next(error)
    }
    let chosenByType = bounties.filter(bounty => type === bounty.type)
    res.status(200).send(chosenByType)*/
})
//get one movie
bountyRouter.get("/:bountyId", (req, res, next)=> {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bountyId === bounty._id)
    if(!foundBounty) {
        const error = new Error('The item was not found')
        res.status(500)
        return next(error)
    }
    res.send(foundBounty)
})
// add one to dB
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty)=> {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })

})
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, 
        (err, deletedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Success! You deleted ${deletedBounty.firstName} ${deletedBounty.lastName} from the dB.`)
    })
})
//update i.e. edit
bountyRouter.put("/:bountyId", (req, res, next) => {
   Bounty.findOneAndUpdate(
       {_id: req.params.bountyId},//up date which one? The one with matching id
        req.body,//take this body and merge it with the existing, only overriding key/values we give
        {new: true}, //send back the updated version!
        (err, updatedBounty) => { //finally, the callback!
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
   )
})

module.exports = bountyRouter