var express = require('express');
var router = express.Router();
var menuSemanalModel = require('../models/menuSemanalModels');
// var util = require('util');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/menuSemanal', async function (req, res, next) {
    let menuSemanal = await menuSemanalModel.getMenuSemanal();

    menuSemanal = menuSemanal.map(menuSemanal => {
        if (menuSemanal.img_id){
            const imagen = cloudinary.url(menuSemanal.img_id, {
                width: 300,
                height: 300,
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

router.post('/contactanos', async (req, res) => {
    const mail = {
        to: 'lic.fernandezagustina@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a través de la web y quiere más información al correo: ${req.body.email} <br> Además realizó la siguiente consulta: ${req.body.consulta} <br> Su número de celular es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transport.sendMail(mail)

      res.status(201).json({
        error: false,
        message: 'Tu consulta fue enviada. En la brevedad te estaremos respondiendo.'
      });
});

// SMTP_HOST=smtp.mailtrap.io
// SMTP_PORT=2525
// SMTP_USER=6dca93d8297618
// SMTP_PASS=a1a691ce5438d9

module.exports = router;