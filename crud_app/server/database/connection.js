const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        //MongoDB connection string
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false,
            useCreateIndex:true 
        })
    } catch(err){

    }
}