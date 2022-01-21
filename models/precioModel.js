'use strict';
const dbConn = require('../db/db');
//Employee object create
const Precio = function (precio) {
    this.valor = precio.valor;
    this.min = precio.min;
    this.max = precio.max;
    this.peso = precio.peso;
    this.id_servicio = precio.id_servicio;
};
Precio.create = function (newPrecio, result) {
    dbConn.query("INSERT INTO precio set ?", newPrecio, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};
Precio.findById = function (id, result) {
    dbConn.query("Select * from precio where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Precio.findAll = function (result) {
    dbConn.query("Select * from precio", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Precio.update = function (id, cliente, result) {
    dbConn.query("UPDATE precio SET valor=?,min=?,max=?,peso=?,id_servicio=? WHERE id = ?", [precio.valor, precio.min,precio.max,precio.peso,precio.id_servicio, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Precio.delete = function (id, result) {
    dbConn.query("DELETE FROM precio WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Precio;