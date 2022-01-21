'use strict';
const dbConn = require('../db/db');
//Employee object create
const Servicio = function (servicio) {
    this.nombre = servicio.nombre;
    this.descripcion = servicio.descripcion;
    this.imagen = servicio.imagen;
    this.seg_ubi = servicio.seg_ubi;
};
Servicio.create = function (newServicio, result) {
    dbConn.query("INSERT INTO servicio set ?", newServicio, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Servicio.findById = function (id, result) {
    dbConn.query("Select * from servicio where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Servicio.findAll = function (result) {
    dbConn.query("Select * from servicio", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Servicios : ', res);
            result(null, res);
        }
    });
};
Servicio.update = function (id, servicio, result) {
    dbConn.query("UPDATE servicio SET nombre=?, descripcion=?, seg_ubi=? WHERE id = ?", [servicio.nombre, servicio.descripcion, servicio.seg_ubi, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Servicio.updateFoto = function (id, servicio, result) {
    dbConn.query("UPDATE servicio SET imagen=? WHERE id = ?", [servicio.imagen, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null,{
                status: 'success',
                code: 200,
                message: 'registro actualizado',
                data: res
            })
        }
    });
};
Servicio.delete = function (id, result) {
    dbConn.query("DELETE FROM servicio WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Servicio;