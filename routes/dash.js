var express = require('express');
var router = express.Router();

const ObjCurso = {
    curso: null,
    pago: null
}

const cursos = ['Java', 'Php', '.Net'];
const pagos = [1200, 800, 1500];


router.get('/', function (req, res, next) {
    const datos = {
        "titulo": "cursos de programacion",
        "left": false,
        "right": true
    }
    res.render('dashboard', datos, (err, html) => {
        res.render('layout', {
            "seccion": html,
        });
    });
});

router.post('/nivel', function (req, res, next) {
    const datos = {
        "titulo": "Nivel de que desea llevar",
        "left": true,
        "right": true
    }
    ObjCurso.curso = req.body.curso;
    res.render('nivel', datos, (err, html) => {
        res.render('layout', {
            "seccion": html,
        });
    });
});


router.get('/pago', function (req, res, next) {
    const datos = {
        "titulo": "Tipo de Pago",
        "left": true,
        "right": false
    }
    res.render('pagos', datos, (err, html) => {
        res.render('layout', {
            "seccion": html,
        });
    });
});

router.post('/resultado', function (req, res, next) {

    ObjCurso.pago = req.body.tipoPago;
    var txtpago = ObjCurso.pago;
    var cantidadPago = pagos[ObjCurso.curso];
    if (txtpago == 'efectivo') {
        cantidadPago = cantidadPago - (cantidadPago * 0.1)
    }
    ObjCurso.curso = cursos[ObjCurso.curso];
    const datos = {
        "titulo": "Tipo de Pago",
        "left": false,
        "right": false,
        "detalle": ObjCurso,
        "pago": cantidadPago
    }
    res.render('resultado', datos, (err, html) => {
        res.render('layout', {
            "seccion": html,
        });
    });
});

module.exports = router;
