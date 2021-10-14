const { response } = require('express');


const usuariosGet = (req, res = response ) => {


    res.status(200).json({
        msg: "get Api controladors"
    });
}

const usuariosPost = (req, res = response) => {
    res.status(200).json({
        msg: "Post Api controlador"
    });
}

const usuariosPatch = (req, res= response) => {
    res.status(200).json({
        msg: "Patch Api controlador"
    });
}

const usuariosPut = (req, res= response) => {
    res.status(200).json({
        msg: "Put Api controlador"
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