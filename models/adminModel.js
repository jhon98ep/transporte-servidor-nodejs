'use strict';
const dbConn = require('../db/db');
//Employee object create
const Admin = function (admin) {
    this.nombre = admin.nombre;
    this.apellido = admin.apellido;
    this.email = admin.email;
    this.telefono = admin.telefono;
    this.organizacion = admin.organizacion;
    this.password = admin.password;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.privilegio = admin.privilegio;
    this.habilitar = admin.habilitar;
};
Admin.create = function (newAdm, result) {
    dbConn.query("INSERT INTO admin set ?", newAdm, function (err, res) {
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
Admin.findById = function (id, result) {
    dbConn.query("Select * from admin where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Admin.findByEmail = function (email, result) {
    dbConn.query("Select * from admin where email = ? ", email, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Admin.findByTlf = function (tlf, result) {
    dbConn.query("Select * from admin where telefono = ? ", tlf, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Admin.findAll = function (result) {
    dbConn.query("Select * from admin", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('administradores : ', res);
            result(null, res);
        }
    });
};
Admin.update = function (id, admin, result) {
    dbConn.query("UPDATE admin SET nombre=?,apellido=?,email=?,telefono=?,organizacion=?, password=?, privilegio=? WHERE id = ?", [admin.nombre, admin.apellido, admin.email, admin.telefono, admin.organizacion, admin.password,admin.privilegio, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Admin.delete = function (id, result) {
    dbConn.query("UPDATE admin SET habilitar = NOT habilitar WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Admin;