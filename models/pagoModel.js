'use strict';
const dbConn = require('../db/db');
//Employee object create
const Pago = function (pago) {
    this.id_cliente = pago.id_cliente;
    this.id_pedido = pago.id_pedido;
    this.id_servicio = pago.id_servicio;
    this.monto = pago.monto;
    this.fecha = pago.fecha;
    this.hora = pago.hora;
    this.realizado = pago.realizado;
};
Pago.create = function (newPago, result) {
    dbConn.query("INSERT INTO pago set ?", newPago, function (err, res) {
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
Pago.findById = function (id, result) {
    dbConn.query("Select * from pago where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Pago.findAll = function (result) {
    dbConn.query("Select * from pago", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Pagos : ', res);
            result(null, res);
        }
    });
};
Pago.update = function (id, pago, result) {
    dbConn.query("UPDATE pago SET realizado=? WHERE id = ?", [pago.realizado, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Pago.delete = function (id, result) {
    dbConn.query("DELETE FROM pago WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Pago;