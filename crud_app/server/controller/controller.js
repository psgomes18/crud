var Userdb = require('../model/model')

//Create and save new User
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty!' })
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
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error ocurred. Try Again!"
            })
        })
}

//Retrive and Return All Users/ Retrive and Return a Single User
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id

        Userdb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message: "Not found user with id " + id})
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: "Erro retrieving user with id " + id})
            })
    }else{
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "And error ocurred trying to retriving User Information" })
        })
    }
    
}
//Update a new Identified User by user Id
exports.update = (req, res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message: 'Data to update cannot be empty'})
    }

    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({message: `Cannot update user with ${id}. User not found`})
        } else {
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error Update user information"})
    })
}

//Delete a User with specified user ID the request
exports.delete = (req, res) => {
    const id = req.params.id

    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: `Cannot Delete with id ${id}. User not found.`})
        } else {
            res.send({
                message: "User was delete sucessfully!"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        })
    }) 

}