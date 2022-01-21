'use strict';
const dbConn = require('../db/db');
//Employee object create
const Pedido = function (pedido) {
    this.id_cliente = pedido.id_cliente;
    this.id_prestador = pedido.id_prestador;
    this.id_servicio = pedido.id_servicio;
    this.ubicacion_recogida = pedido.ubicacion_recogida;
    this.latitud_recogida = pedido.latitud_recogida; 
    this.longitud_recogida = pedido.longitud_recogida;
    this.ubicacion_destino = pedido.ubicacion_destino;
    this.latitud_destino = pedido.latitud_destino; 
    this.longitud_destino = pedido.longitud_destino;
    this.placa_servicio = pedido.placa_servicio;
    this.placa_cliente = pedido.placa_cliente;
    this.tipo_vehiculo = pedido.tipo_vehiculo;
    this.peso = pedido.peso;
    this.distancia = pedido.distancia;
    this.ciudad = pedido.ciudad;
    this.precio = pedido.precio;
    this.fecha = pedido.fecha;
    this.hora = pedido.hora;
    this.comentario = pedido.comentario;
    this.tomado = pedido.tomado;
    this.estado = pedido.estado;
    this.tiempo = pedido.tiempo;
    this.habilitar = pedido.habilitar;
};
Pedido.create = function (newPedido, result) {
    dbConn.query("INSERT INTO pedido set ?", newPedido, function (err, res) {
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
Pedido.findById = function (id, result) {
    dbConn.query("Select * from pedido where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Pedido.findByIdCliente = function (id, result) {
    dbConn.query("Select * from pedido where id_cliente = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Pedido.findByIdPrestador = function (id, result) {
    dbConn.query("Select * from pedido where id_prestador = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Pedido.findByIdServicio = function (id, result) {
    dbConn.query("Select * from pedido where id_servicio = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Pedido.findByPlacaP = function (placap, result) {
    dbConn.query("Select * from pedido where placa_servicio = ? ", placap, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Pedido.findByPlacaC = function (placac, result) {
    dbConn.query("Select * from pedido where placa_cliente = ? ", placac, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Pedido.findByFecha = function (fecha, result) {
    dbConn.query("Select * from pedido where fecha = ? ", fecha, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Pedido.findAll = function (result) {
    dbConn.query("Select * from pedido", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('pedidos : ', res);
            result(null, res);
        }
    });
};
Pedido.update = function (id, pedido, result) {
    dbConn.query("UPDATE pedido SET id_cliente=?,id_prestador=?,id_servicio=?,ubicacion_recogida=?,latitud_recogida=?,longitud_recogida=?,ubicacion_destino=?,latitud_destino=?,longitud_destino=?,placa_servicio=?,placa_cliente=?,tipo_vehiculo=?,peso=?,distancia=?,ciudad=?,precio=?,fecha=?,hora=?,comentario=?,tomado=?,estado=?,tiempo=? WHERE id = ?", [pedido.id_cliente,pedido.id_prestador, pedido.id_servicio, pedido.ubicacion_recogida, pedido.latitud_recogida, pedido.longitud_recogida, pedido.ubicacion_destino, pedido.latitud_destino, pedido.longitud_destino, pedido.placa_servicio, pedido.placa_cliente,pedido.tipo_vehiculo, pedido.peso, pedido.distancia, pedido.ciudad, pedido.precio, pedido.fecha, pedido.hora, pedido.comentario, pedido.tomado, pedido.estado, pedido.tiempo, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Pedido.delete = function (id, result) {
    dbConn.query("UPDATE pedido SET habilitar = NOT habilitar WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Pedido;