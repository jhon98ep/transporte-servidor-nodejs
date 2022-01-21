const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>
res.json({
     status: 'ok',
     code: 200,
     message: "bienvenido"
    })
)

/* app.put('/prestador/foto', upload ,(req, res) =>{
    console.log(req.file);
}) */

const adminControlador = require('./controllers/adminController')
const clienteControlador = require('./controllers/clienteController')
const prestadorControlador = require('./controllers/prestadorController')
const servicioControlador = require('./controllers/servicioController')
const pedidoControlador = require('./controllers/pedidoController')
const tipoVhControlador = require('./controllers/tipoVhController')
const precioControlador = require('./controllers/precioController')
const pagoControlador = require('./controllers/pagoController')

// Administrador
routes.route('/admin')
    .get(adminControlador.findAll)
    .post(adminControlador.create)

routes.route('/admin/id/:id')
    .get(adminControlador.findById)
    .put(adminControlador.update)
    .delete(adminControlador.delete)

routes.route('/admin/email/:email')
    .get(adminControlador.findByEmail)

routes.route('/admin/tlf/:tlf')
    .get(adminControlador.findByTlf)

// Cliente
routes.route('/cliente/')
    .get(clienteControlador.findAll)
    .post(clienteControlador.create)

routes.route('/cliente/id/:id')
    .get(clienteControlador.findById)
    .put(clienteControlador.update)
    .delete(clienteControlador.delete)

routes.route('/cliente/email/:email')
    .get(clienteControlador.findByEmail)

routes.route('/cliente/tlf/:tlf')
    .get(clienteControlador.findByTlf)
	
routes.route('/cliente/sms/')
    .post(clienteControlador.sendSMS)
// Prestador
routes.route('/prestador')
    .get(prestadorControlador.findAll)
    .post(prestadorControlador.create)

routes.route('/prestador/id/:id')
    .get(prestadorControlador.findById)
    .put(prestadorControlador.update)
    .delete(prestadorControlador.delete)

routes.route('/prestador/email/:email')
    .get(prestadorControlador.findByEmail)

routes.route('/prestador/tlf/:tlf')
    .get(prestadorControlador.findByTlf)

routes.route('/prestador/sms/')
    .post(prestadorControlador.sendSMS)

routes.route('/prestador/posicion/:id')
    .get(prestadorControlador.getPosicion)
    .put(prestadorControlador.updatePosicion)

routes.route('/prestador/foto/:id')
    .put(prestadorControlador.updateFoto)

routes.route('/prestador/cedulaF/:id')
    .put(prestadorControlador.updateCedulaF)

routes.route('/prestador/cedulaP/:id')
    .put(prestadorControlador.updateCedulaP)

routes.route('/prestador/soat/:id')
    .put(prestadorControlador.updateSoat)

routes.route('/prestador/tecno/:id')
    .put(prestadorControlador.updateTecno)

// Servicio	
routes.route('/servicio')
    .get(servicioControlador.findAll)
    .post(servicioControlador.create)

routes.route('/servicio/id/:id')
    .get(servicioControlador.findById)
    .put(servicioControlador.update)
    .delete(servicioControlador.delete)

routes.route('/servicio/imagen/:id')
    .put(servicioControlador.updateFoto)

// Pago
routes.route('/pago')
    .get(pagoControlador.findAll)
    .post(pagoControlador.create)

routes.route('/pago/id/:id')
    .get(pagoControlador.findById)
    .put(pagoControlador.update)
    .delete(pagoControlador.delete)

// Pedido	
routes.route('/pedido')
    .get(pedidoControlador.findAll)
    .post(pedidoControlador.create)

routes.route('/pedido/id/:id')
    .get(pedidoControlador.findById)
    .put(pedidoControlador.update)
    .delete(pedidoControlador.delete)

routes.route('/pedido/cliente/:id')
    .get(pedidoControlador.findByIdCliente)

routes.route('/pedido/prestador/:id')
    .get(pedidoControlador.findByIdPrestador)

routes.route('/pedido/servicio/:id')
    .get(pedidoControlador.findByIdServicio)

routes.route('/pedido/placap/:placap')
    .get(pedidoControlador.findByPlacaP)

routes.route('/pedido/placac/:placac')
    .get(pedidoControlador.findByPlacaC)

routes.route('/pedido/fecha/:fecha')
    .get(pedidoControlador.findByFecha)

// Tipo de vehiculos
routes.route('/tipovh')
    .get(tipoVhControlador.findAll)
    .post(tipoVhControlador.create)

routes.route('/tipovh/id/:id')
    .get(tipoVhControlador.findById)
    .put(tipoVhControlador.update)
    .delete(tipoVhControlador.delete)

// Precio
routes.route('/precio')
    .get(precioControlador.findAll)
    .post(precioControlador.create)

routes.route('/precio/id/:id')
    .get(precioControlador.findById)
    .put(precioControlador.update)
    .delete(precioControlador.delete) 

module.exports = routes