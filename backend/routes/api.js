var express = require('express');
var router = express.Router();
var menuSemanalModel = require('../models/menuSemanalModels');
// var util = require('util');
var cloudinary = require('cloudinary').v2;

router.get('/menuSemanal', async function (req, res, next) {
    let menuSemanal = await menuSemanalModel.getMenuSemanal();

    menuSemanal = menuSemanal.map(menuSemanal => {
        if (menuSemanal.img_id){
            const imagen = cloudinary.url(menuSemanal.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ... menuSemanal,
                imagen
            }
        } else {
            return {
                ...menuSemanal,
                imagen: ''
            }
        }
    });

    res.json(menuSemanal);
});

module.exports = router