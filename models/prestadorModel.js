'use strict';
const dbConn = require('../db/db');
require('dotenv').config();

//Employee object create
const Prestador = function (prestador) {
    this.nombre = prestador.nombre;
    this.apellido = prestador.apellido;
    this.cedula = prestador.cedula;
    this.email = prestador.email;
    this.telefono = prestador.telefono;
    this.organizacion = prestador.organizacion;
    this.password = prestador.password;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.verificado = prestador.verificado;
    this.id_servicio = prestador.id_servicio;
    this.codigo = prestador.codigo;
    this.latitud = prestador.latitud;
    this.longitud = prestador.longitud;
    this.foto = prestador.foto;
    this.cedula_f = prestador.cedula_f;
    this.cedula_p = prestador.cedula_p;
    this.placa = prestador.placa;
    this.soat_f = prestador.soat_f;
    this.tecno_f = prestador.tecno_f;
    this.habilitar = prestador.habilitar;
};
Prestador.create = function (newPrestador, result) {
    dbConn.query("INSERT INTO prestador set ?", newPrestador, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            if (res.length === 0) {
                result(null,{
                    status: 'incorrecto',
                    code: 200,
                    message: 'registro no encontrado',
                })
            }else{
                result(null,{
                    status: 'success',
                    code: 200,
                    message: 'registro encontrado',
                    data: res
                })
            }           
        }
    });
};
Prestador.findById = function (id, result) {
    dbConn.query("Select * from prestador where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            if (res.length === 0) {
                result(null,{
                    status: 'incorrecto',
                    code: 200,
                    message: 'registro no encontrado',
                })
            }else{
                result(null,{
                    status: 'success',
                    code: 200,
                    message: 'registro encontrado',
                    data: res
                })
            }             
        }
    });
};
Prestador.findByEmail = function (email, result) {
    dbConn.query("Select * from prestador where email = ? ", email, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            if (res.length === 0) {
                result(null,{
                    status: 'incorrecto',
                    code: 200,
                    message: 'registro no encontrado',
                })
            }else{
                result(null,{
                    status: 'success',
                    code: 200,
                    message: 'registro encontrado',
                    data: res
                })
            }           
        }
    });
};
Prestador.findByTlf = function (tlf, result) {
    dbConn.query("Select * from prestador where telefono = ? ", tlf, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            if (res.length === 0) {
                result(null,{
                    status: 'incorrecto',
                    code: 200,
                    message: 'registro no encontrado',
                })
            }else{
                result(null,{
                    status: 'success',
                    code: 200,
                    message: 'registro encontrado',
                    data: res
                })
            }           
        }
    });
};
Prestador.findAll = function (result) {
    dbConn.query("Select * from prestador", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('prestadores : ', res);
            result(null,{
                status: 'success',
                code: 200,
                message: 'prestadores registrados : ',
                data: res
            })
        }
    });
};
Prestador.update = function (id, prestador, result) {
    dbConn.query("UPDATE prestador SET nombre=?,apellido=?,cedula=?,email=?,telefono=?,organizacion=?, password=?, verificado=?, id_servicio=?, codigo=?, placa=? WHERE id = ?", [prestador.nombre, prestador.apellido, prestador.cedula, prestador.email, prestador.telefono, prestador.organizacion, prestador.password, prestador.verificado, prestador.id_servicio, prestador.codigo,prestador.placa, id], function (err, res) {
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
Prestador.delete = function (id, result) {
    dbConn.query("UPDATE prestador SET habilitar = NOT habilitar WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null,{
                status: 'success',
                code: 200,
                message: 'registro eliminado',
                data: res
            })
        }
    });
};
Prestador.updatePosicion = function (id, prestador, result) {
    dbConn.query("UPDATE prestador SET latitud=?, longitud=? WHERE id = ?", [prestador.latitud, prestador.longitud, id], function (err, res) {
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
Prestador.updateFoto = function (id, prestador, result) {
    dbConn.query("UPDATE prestador SET foto=? WHERE id = ?", [prestador.foto, id], function (err, res) {
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
Prestador.updateCedulaF = function (id, prestador, result) {
    dbConn.query("UPDATE prestador SET cedula_f=? WHERE id = ?", [prestador.cedula_f, id], function (err, res) {
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
Prestador.updateCedulaP = function (id, prestador, result) {
    dbConn.query("UPDATE prestador SET cedula_p=? WHERE id = ?", [prestador.cedula_p, id], function (err, res) {
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
Prestador.updateSoat = function (id, prestador, result) {
    dbConn.query("UPDATE prestador SET soat_f=? WHERE id = ?", [prestador.soat_f, id], function (err, res) {
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
Prestador.updateTecno = function (id, prestador, result) {
    dbConn.query("UPDATE prestador SET tecno_f=? WHERE id = ?", [prestador.tecno_f, id], function (err, res) {
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
Prestador.getPosicion = function (id, result) {
    dbConn.query("Select latitud, longitud from prestador where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            if (res.length === 0) {
                result(null,{
                    status: 'incorrecto',
                    code: 200,
                    message: 'registro no encontrado',
                })
            }else{
                result(null,{
                    status: 'success',
                    code: 200,
                    message: 'registro encontrado',
                    data: res
                })
            }             
        }
    });
};
Prestador.sendSMS = function(newPrestador, result){
    console.log(process.env.ACCOUNT_SID);
    console.log(process.env.AUTH_TOKEN);
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        to: '+57'+newPrestador.telefono,
        from: '+15755795356',
        body: 'hola tu codigo de verificacion es: '+newPrestador.codigo
    })
    .then(message => result({message : 'mensaje enviado'}))
    .catch(error => console.log(error))
};
module.exports = Prestador;