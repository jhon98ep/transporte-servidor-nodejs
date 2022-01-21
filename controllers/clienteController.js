'use strict';
const Cliente = require('../models/clienteModel')

exports.findAll = function(req, res) {
	Cliente.findAll(function(err, cliente) {
		console.log('controller')
		if (err)
			res.send(err);
		console.log('res', cliente);
		res.send(cliente);
	});
};

exports.create = function(req, res) {
	const new_cliente = new Cliente(req.body);
	//handles null error
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Cliente.create(new_cliente, function(err, cliente) {
			if (err)
				res.send(err);
			res.json({error:false,message:"Cliente added successfully!",data:cliente});
		});
	}
};

exports.findById = function(req, res) {
	Cliente.findById(req.params.id, function(err, cliente) {
		if (err)
			res.send(err);
		res.json(cliente);
	});
};

exports.findByEmail = function(req, res) {
	Cliente.findByEmail(req.params.email, function(err, cliente) {
		if (err)
			res.send(err);
		res.json(cliente);
	});
};

exports.findByTlf = function(req, res) {
	Cliente.findByTlf(req.params.tlf, function(err, cliente) {
		if (err)
			res.send(err);
		res.json(cliente);
	});
};

exports.sendSMS = function(req, res) {
	const new_cliente = new Cliente(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Cliente.sendSMS(new_cliente, function(err, cliente) {
			if (err)
				res.send(err);
			res.json({error:false,message:"sms enviado!",data:cliente});
		});
	}
};

exports.update = function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Cliente.update(req.params.id, new Cliente(req.body), function(err, cliente) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Cliente successfully updated' });
		});
	}
};

exports.delete = function(req, res) {
	Cliente.delete( req.params.id, function(err, cliente) {
		if (err)
			res.send(err);
		res.json({ error:false, message: 'cliente successfully deleted' });
	});
};
