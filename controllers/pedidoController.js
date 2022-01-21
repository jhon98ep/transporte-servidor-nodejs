'use strict';
const Pedido = require('../models/pedidoModel')

exports.findAll = function(req, res) {
	Pedido.findAll(function(err, pedido) {
		console.log('controller')
		if (err)
			res.send(err);
		console.log('res', pedido);
		res.send(pedido);
	});
};

exports.create = function(req, res) {
	const new_pedido = new Pedido(req.body);
	//handles null error
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Pedido.create(new_pedido, function(err, pedido) {
			if (err)
				res.send(err);
			console.log(pedido);
			res.json({error:false,message:"pedido added successfully!",data:pedido});
		});
	}
};

exports.findById = function(req, res) {
	Pedido.findById(req.params.id, function(err, pedido) {
		if (err)
			res.send(err);
		res.json(pedido);
	});
};

exports.findByIdCliente = function(req, res) {
	Pedido.findByIdCliente(req.params.id, function(err, pedido) {
		if (err)
			res.send(err);
		res.json(pedido);
	});
};

exports.findByIdPrestador = function(req, res) {
	Pedido.findByIdPrestador(req.params.id, function(err, pedido) {
		if (err)
			res.send(err);
		res.json(pedido);
	});
};

exports.findByIdServicio = function(req, res) {
	Pedido.findByIdServicio(req.params.id, function(err, pedido) {
		if (err)
			res.send(err);
		res.json(pedido);
	});
};

exports.findByPlacaP = function(req, res) {
	Pedido.findByPlacaP(req.params.placap, function(err, pedido) {
		if (err)
			res.send(err);
		res.json(pedido);
	});
};

exports.findByPlacaC = function(req, res) {
	Pedido.findByPlacaC(req.params.placac, function(err, pedido) {
		if (err)
			res.send(err);
		res.json(pedido);
	});
};

exports.findByFecha = function(req, res) {
	Pedido.findByFecha(req.params.fecha, function(err, pedido) {
		if (err)
			res.send(err);
		res.json(pedido);
	});
};

exports.update = function(req, res) {
	console.log(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Pedido.update(req.params.id, new Pedido(req.body), function(err, pedido) {
			if (err)
				res.send(err);
			console.log(pedido);
			res.json({ error:false, message: 'Pedido successfully updated', pedido: pedido });
		});
	}
};

exports.delete = function(req, res) {
	Pedido.delete( req.params.id, function(err, pedido) {
		if (err)
			res.send(err);
		res.json({ error:false, message: 'Pedido successfully deleted' });
	});
};
