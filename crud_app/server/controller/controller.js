var Userdb = require('../model/model')

//Create and save new User
exports.create = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message: 'Content can not be empty!'})
        return
    } 

    //New User
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //Save on MongoDB
}

//Retrive and Return All Users/ Retrive and Return a Single User
exports.find = (req, res) => {

}

//Update a new Identified User by user Id
exports.update = (req, res) => {

}

//Delete a User with specified user ID the request
exports.delete = (req, res) => {

}