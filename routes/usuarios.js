
const { Router } = require('express');
const { check } = require('express-validator');


const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios.controller');
const { validarCampos } = require('../middlewares/validar-campos');



const router = Router();


router.get('/', usuariosGet );

router.post('/', [
    check('nombre', 'llene el nombre').not().isEmpty(),
    check('password', 'debe ir un password valido').isLength({ min: 6 }),
    check('correo', 'el correo no es valido').isEmail(),
    check('rol', 'no esta permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
],  usuariosPost );

router.put('/:id', usuariosPut );
router.patch('/', usuariosPatch );
router.delete('/', usuariosDelete );

module.exports = router;

