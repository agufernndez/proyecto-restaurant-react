const { response } = require('express');
var express = require('express');
var router = express.Router();
var menuSemanalModel = require('../../models/menuSemanalModels')

// para listar menuSemanal
router.get('/', async function (req, res, next) {

    let menuSemanal = await menuSemanalModel.getMenuSemanal();

    res.render('admin/menuSemanal', {
        layout: 'admin/layout',
        // ACTIVAR CUANDO SOLUCIONE LO DE LA BASE DE DATOS
        usuario: req.session.nombre,
        menuSemanal
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
});

router.post('/agregar', async (req, res, next) => {
    try {
        // hago la validacion para que se completen todos los campos
        if (req.body.nombreDelPlato != '' && req.body.descripcion != '' && req.body.precio != '') {
            await menuSemanalModel.insertMenu(req.body);
            res.redirect('/admin/menuSemanal')
        } else {
            // en caso que no se hayan completado todos los campos:
            res.render('admin/agregar', {
                layout: '/admin/layout',
                erorr: true,
                message: 'Se necesitan completar todos los campos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('/admin/agregar', {
            layout: '/admin/layout',
            error: true,
            message: 'No se cargo el plato principal'
        })
    }
})

module.exports = router;