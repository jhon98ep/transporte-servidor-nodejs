'use strict';
const Pago = require('../models/pagoModel')

exports.findAll = function(req, res) {
	Pago.findAll(function(err, pago) {
		console.log('controller')
		if (err)
			res.send(err);
		console.log('res', pago);
		res.send(pago);
	});
};

exports.create = function(req, res) {
	const new_pago = new Pago(req.body);
	//handles null error
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Pago.create(new_pago, function(err, pago) {
			if (err)
				res.send(err);
			res.json({error:false,message:"Pago added successfully!",data:pago});
		});
	}
};

exports.findById = function(req, res) {
	Pago.findById(req.params.id, function(err, pago) {
		if (err)
			res.send(err);
		res.json(pago);
	});
};

exports.update = function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Pago.update(req.params.id, new Pago(req.body), function(err, pago) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Pago successfully updated' });
		});
	}
};

exports.delete = function(req, res) {
	Pago.delete( req.params.id, function(err, pago) {
		if (err)
			res.send(err);
		res.json({ error:false, message: 'pago successfully deleted' });
	});
};
