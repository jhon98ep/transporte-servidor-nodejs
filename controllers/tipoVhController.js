'use strict';
const TipoVh = require('../models/tipoVhModel')

exports.findAll = function(req, res) {
	TipoVh.findAll(function(err, tipoVh) {
		if (err)
			res.send(err);
		res.send(tipoVh);
	});
};

exports.create = function(req, res) {
	const new_tipoVh = new TipoVh(req.body);
	//handles null error
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		TipoVh.create(new_tipoVh, function(err, tipoVh) {
			if (err)
				res.send(err);
			res.json({error:false,message:"tipoVh added successfully!",data:tipoVh});
		});
	}
};

exports.findById = function(req, res) {
	TipoVh.findById(req.params.id, function(err, tipoVh) {
		if (err)
			res.send(err);
		res.json(tipoVh);
	});
};

exports.update = function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		TipoVh.update(req.params.id, new TipoVh(req.body), function(err, tipoVh) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'tipoVh successfully updated' });
		});
	}
};

exports.delete = function(req, res) {
	TipoVh.delete( req.params.id, function(err, tipoVh) {
		if (err)
			res.send(err);
		res.json({ error:false, message: 'tipoVh successfully deleted' });
	});
};