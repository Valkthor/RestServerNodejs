
const mongoose = require('mongoose');

// creacion de conexion
const dbConnection = async() => {
    try {
        mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false
        })


        console.log("base de datos online");
    } catch (error) {
        throw new Error("error po");
    }
}

module.exports = {
    dbConnection
}