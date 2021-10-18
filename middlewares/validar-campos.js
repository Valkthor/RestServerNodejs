
const { validationResult } = require('express-validator');


// next: si se termina este middleware, que sigua con el siguiente
const validarCampos = ( req, res, next ) => {

    // validacion de express validator
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}

module.exports = {
    validarCampos
}


