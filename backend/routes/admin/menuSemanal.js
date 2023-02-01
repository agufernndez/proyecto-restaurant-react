const { response } = require('express');
var express = require('express');
const { isDeepStrictEqual } = require('util');
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

// eliminar plato principal
router.get('/eliminar/:id', async (req, res, next) => {
    let id = req.params.id;
    await menuSemanalModel.deletePlatoPrincipalById(id);
    res.redirect('/admin/menuSemanal')
});

// modificar plato principal
router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let menuSemanal = await menuSemanalModel.getPlatoPrincipalById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        menuSemanal
    })
});

// boton de modificar
router.post('/modificar', async (req, res, next) => {
    try {
        var obj = {
            nombreDelPlato: req.body.nombreDelPlato,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
        }
        console.log(obj);

        await menuSemanalModel.updatePlatoPrincipalById (obj, req.body.id);
        res.redirect('/admin/menuSemanal');

    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se pudo realizar la modificación'
        })
    }
})


module.exports = router;