const { response } = require('express');
var express = require('express');
const { isDeepStrictEqual } = require('util');
var router = express.Router();
var menuSemanalModel = require('../../models/menuSemanalModels')
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


// para listar menuSemanal
router.get('/', async function (req, res, next) {

    let menuSemanal = await menuSemanalModel.getMenuSemanal();
    
    // NO SE VISUALIZA LA IMAGEN EN EL NAVEGADOR, SOLO EL IMG_ID. CÓMO LO RESULVO?????/
    menuSemanal = menuSemanal.map(platoPrincipal => {
        if (platoPrincipal.img_id) {
            const imagen = cloudinary.image(platoPrincipal.img_id, {
                width: 80,
                height: 80,
                crop: 'fill'
            });
            return {
                ...platoPrincipal,
                imagen
            }
        } else {
            return {
                ...platoPrincipal,
                imagen: ''
            }
        }
    })

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
        let img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        // hago la validacion para que se completen todos los campos
        if (req.body.nombreDelPlato != '' && req.body.descripcion != '' && req.body.precio != '') {
            await menuSemanalModel.insertMenu({
                ...req.body,
                img_id
            });
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

    let platoPrincipal = await menuSemanalModel.getPlatoPrincipalById(id);
    if (platoPrincipal.img_id) {
        await (destroy(platoPrincipal.img_id))
    }


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

        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === '1') {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader (imagen.tempFilePath)).public_id;
                borrar_img_vieja = true
            }
        }
        
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        var obj = {
            nombreDelPlato: req.body.nombreDelPlato,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            img_id
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