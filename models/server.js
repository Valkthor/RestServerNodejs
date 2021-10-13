
const express = require('express')
const cors = require('cors')


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;


        // middlewares
        this.middlewares();

        this.routes();

        //console.log("hola po");
    }

    middlewares(){

        // cors
        this.app.use(cors());

        // directorio publico
        this.app.use(express.static('public'));
    }

    routes(){


        this.app.get('/api',  (req, res) => {
            //res.send('Hello World')

            res.status(200).json({
                msg: "get Api"
            });

        })
        this.app.post('/api',  (req, res) => {
            //res.send('Hello World')

            res.status(200).json({
                msg: "post Api"
            });

        })
        this.app.put('/api',  (req, res) => {
            //res.send('Hello World')

            res.status(200).json({
                msg: "put Api"
            });

        })
        this.app.delete('/api',  (req, res) => {
            //res.send('Hello World')

            res.status(200).json({
                msg: "delete Api"
            });

        })
           
        

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("proceso corriendo en puerto",this.port);
        })
    }

}

module.exports = Server;