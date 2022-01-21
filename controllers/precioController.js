'use strict';
const Precio = require('../models/precioModel')

exports.findAll = function(req, res) {
	Precio.findAll(function(err, precio) {
		console.log('controller')
		if (err)
			res.send(err);
		res.send(precio);
	});
};

exports.create = function(req, res) {
	const new_precio = new Precio(req.body);
	//handles null error
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Precio.create(new_precio, function(err, precio) {
			if (err)
				res.send(err);
			res.json({error:false,message:"precio added successfully!",data:precio});
		});
	}
};

exports.findById = function(req, res) {
	Precio.findById(req.params.id, function(err, precio) {
		if (err)
			res.send(err);
		res.json(precio);
	});
};

exports.update = function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Precio.update(req.params.id, new Precio(req.body), function(err, precio) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'precio successfully updated' });
		});
	}
};

exports.delete = function(req, res) {
	Precio.delete( req.params.id, function(err, precio) {
		if (err)
			res.send(err);
		res.json({ error:false, message: 'precio successfully deleted' });
	});
};