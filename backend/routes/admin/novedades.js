var express = require('express');
var router = express.Router();

// para listar novedades
router.get('/', async function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        // ACTIVAR CUANDO SOLUCIONE LO DE LA BASE DE DATOS
        usuario: req.session.nombre
    });
});


module.exports = router;