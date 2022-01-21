'use strict';
const Servicio = require('../models/servicioModel')
const path = require('path');
const fs = require('fs-extra')

exports.findAll = function(req, res) {
	Servicio.findAll(function(err, servicio) {
		if (err)
			res.send(err);
		res.send(servicio);
	});
};

exports.create = function(req, res) {
	const new_servicio = new Servicio(req.body);
	//handles null error
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Servicio.create(new_servicio, function(err, servicio) {
			if (err)
				res.send(err);
			res.json({error:false,message:"servicio added successfully!",data:servicio});
		});
	}
};

exports.findById = function(req, res) {
	Servicio.findById(req.params.id, function(err, servicio) {
		if (err)
			res.send(err);
		res.json(servicio);
	});
};

exports.update = function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Servicio.update(req.params.id, new Servicio(req.body), function(err, servicio) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'servicio successfully updated' });
		});
	}
};

exports.updateFoto = async function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Proporcione todos los campos obligatorios' });
	}else{
		const imageTempPath = req.file.path;
		const ext = path.extname(req.file.originalname)
		const nm = 'public/recursos/servicios/servicio_'+req.params.id+''+ext;
		const targetPath = path.resolve(nm)
		await fs.rename(imageTempPath, targetPath);
		req.body.imagen='http://3.18.61.208/'+nm;
		console.log(req.body)
		console.log(req.body.imagen)
		Servicio.updateFoto(req.params.id, new Servicio(req.body), function(err, servicio) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Prestador actualizado correctamente' });
		});
	}
};

exports.delete = function(req, res) {
	Servicio.delete( req.params.id, function(err, servicio) {
		if (err)
			res.send(err);
		res.json({ error:false, message: 'servicio successfully deleted' });
	});
};
