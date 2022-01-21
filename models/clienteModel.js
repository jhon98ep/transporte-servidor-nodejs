'use strict';
const dbConn = require('../db/db');
require('dotenv').config();
//Employee object create
const Cliente = function (cliente) {
    this.nombre = cliente.nombre;
    this.apellido = cliente.apellido;
    this.email = cliente.email;
    this.telefono = cliente.telefono;
    this.password = cliente.password;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.codigo = cliente.codigo;
    this.verificado = cliente.verificado;
    this.habilitar = cliente.habilitar;
};
Cliente.create = function (newCliente, result) {
    dbConn.query("INSERT INTO cliente set ?", newCliente, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            Cliente.sendSMS(newCliente);
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Cliente.sendSMS = function(newCliente, result){
    console.log(process.env.ACCOUNT_SID);
    console.log(process.env.AUTH_TOKEN);
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        to: '+57'+newCliente.telefono,
        from: '+15755795356',
        body: 'hola tu codigo de verificacion es: '+newCliente.codigo
    })
    .then(message => result({message : 'mensaje enviado'}))
    .catch(error => console.log(error))
};

Cliente.findById = function (id, result) {
    dbConn.query("Select * from cliente where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Cliente.findByEmail = function (email, result) {
    dbConn.query("Select * from cliente where email = ? ", email, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Cliente.findByTlf = function (tlf, result) {
    dbConn.query("Select * from cliente where telefono = ? ", tlf, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Cliente.findAll = function (result) {
    dbConn.query("Select * from cliente", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Clientes : ', res);
            result(null, res);
        }
    });
};
Cliente.update = function (id, cliente, result) {
    dbConn.query("UPDATE cliente SET nombre=?,apellido=?,email=?,telefono=?, password=?, codigo=?, verificado=? WHERE id = ?", [cliente.nombre, cliente.apellido, cliente.email, cliente.telefono, cliente.password, cliente.codigo, cliente.verificado, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Cliente.delete = function (id, result) {
    dbConn.query("UPDATE cliente SET habilitar = NOT habilitar WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Cliente;