const { response, request } = require('express');

// se agrega conexion al modelo
const Usuario = require('../models/usuario');


const usuariosGet = (req = request, res = response ) => {

    // usuarios?q=hola&nombre=sergio&apikey=1234567&page=1&limit=10
    // para atajar eso se usa query
    
    //const query = req.query;

    // desestructurando seria asi, en nombre viene se llena un parametro por defecto si es q no se manda
    const { q, nombre = 'no Name', apikey, page, limit } = req.query;

    res.status(200).json({
        msg: "get Api controladors",
        q,
        nombre,
        apikey
    });
}

// se cambia a async
const usuariosPost = async (req, res = response) => {

    //const { nombre, edad } = req.body;
    
    const body = req.body;

    //se obtiene la instancia del modelo y se envia el modelo json
    // mongo se encargara de guardar solo los datos que coincidan con su esquema.
    const usuario = new Usuario(body);

    await usuario.save();
    
    //console.log(body); 
    res.status(200).json({
        msg: "Post Api controlador",
        usuario
    });
}

const usuariosPatch = (req, res= response) => {
    res.status(200).json({
        msg: "Patch Api controlador"
    });
}

const usuariosPut = (req, res= response) => {

    const id = req.params.id;
    res.status(200).json({
        msg: "Put Api controlador", 
        id
    });
}
const usuariosDelete = (req, res= response) => {
    res.status(200).json({
        msg: "Delete Api controlador"
    });
}



module.exports = {
    usuariosGet, usuariosPost, usuariosPatch, usuariosPut, usuariosDelete
}