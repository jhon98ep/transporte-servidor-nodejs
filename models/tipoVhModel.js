'use strict';
const dbConn = require('../db/db');
//Employee object create
const TipoVh = function (tipoVh) {
    this.nombre = tipoVh.nombre;
};
TipoVh.create = function (newTipoVh, result) {
    dbConn.query("INSERT INTO tipo_vh set ?", newTipoVh, function (err, res) {
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
TipoVh.findById = function (id, result) {
    dbConn.query("Select * from tipo_vh where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
TipoVh.findAll = function (result) {
    dbConn.query("Select * from tipo_vh", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
TipoVh.update = function (id, cliente, result) {
    dbConn.query("UPDATE tipo_vh SET nombre=? WHERE id = ?", [tipoVh.nombre, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
TipoVh.delete = function (id, result) {
    dbConn.query("DELETE FROM tipo_vh WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = TipoVh;