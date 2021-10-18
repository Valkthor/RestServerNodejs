
const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config.db');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // conectar a bd
        this.conectarBD();

        // middlewares
        this.middlewares();

        this.routes();

        //console.log("hola po");
    }

    middlewares(){

        // cors
        this.app.use(cors());

        // lectura parse del body
        this.app.use(express.json());

        // directorio publico
        this.app.use(express.static('public'));
    }

    async conectarBD(){
        await dbConnection();
    }


    routes(){


           this.app.use(this.usuariosPath, require('../routes/usuarios'));
        

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("proceso corriendo en puerto",this.port);
        })
    }

}

module.exports = Server;