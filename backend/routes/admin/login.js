var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuarioModels');

// diseño del login
router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'}
        );
});


// funcionamiento del login, cuando alguien inicia sesion con su usuario ya registrado
router.post('/', async (req, res, next) => {
    try {
    
        console.log(req.body);  // esto hace que en la consola vea el nombre y contrasena del usuario
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await usuariosModel.getUserByUserNameAndPassword(usuario, password);

        if (data != undefined) {
// ACTIVAR CUANDO SOLUCIONE LO DE LA BASE DE DATOS. AHORA LO DESACTIVE PORQUE SINO NO PUEDO ENTRAR A /ADMIN/menuSemanal
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            res.redirect('/admin/menuSemanal');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
    }
});

// logout
router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

module.exports = router;