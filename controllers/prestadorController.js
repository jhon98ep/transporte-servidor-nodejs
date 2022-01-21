'use strict';
const Prestador = require('../models/prestadorModel')
const path = require('path');
const fs = require('fs-extra')

exports.findAll = function(req, res) {
	Prestador.findAll(function(err, prestador) {
		if (err)
			res.send(err);
		res.send(prestador);
	});
};

exports.create = function(req, res) {
	const new_prestador = new Prestador(req.body);
	//handles null error
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Proporcione todos los campos obligatorios' });
	}else{
		Prestador.create(new_prestador, function(err, prestador) {
			if (err)
				res.send(err);
			res.json({error:false,message:"Prestador agregado correctamente!",data:prestador});
		});
	}
};

exports.findById = function(req, res) {
	Prestador.findById(req.params.id, function(err, prestador) {
		if (err)
			res.send(err);
		res.json(prestador);
	});
};

exports.findByEmail = function(req, res) {
	Prestador.findByEmail(req.params.email, function(err, prestador) {
		if (err)
			res.send(err);
		res.json(prestador);
	});
};

exports.findByTlf = function(req, res) {
	Prestador.findByTlf(req.params.tlf, function(err, prestador) {
		if (err)
			res.send(err);
		res.json(prestador);
	});
};

exports.update = function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Proporcione todos los campos obligatorios' });
	}else{
		Prestador.update(req.params.id, new Prestador(req.body), function(err, prestador) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Prestador actualizado correctamente' });
		});
	}
};

exports.delete = function(req, res) {
	Prestador.delete( req.params.id, function(err, prestador) {
		if (err)
			res.send(err);
		res.json({ error:false, message: 'Prestador habilitado/inhabilitado correctamente' });
	});
};

exports.updatePosicion = function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Proporcione todos los campos obligatorios' });
	}else{
		Prestador.updatePosicion(req.params.id, new Prestador(req.body), function(err, prestador) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Prestador actualizado correctamente' });
		});
	}
};

exports.updateFoto = async function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Proporcione todos los campos obligatorios' });
	}else{
		console.log('subiendo foto',req.file)
		const imageTempPath = req.file.path;
		const ext = path.extname(req.file.originalname)
		const nm = 'public/recursos/perfil_'+req.params.id+''+ext;
		const targetPath = path.resolve(nm)
		await fs.rename(imageTempPath, targetPath);
		req.body.foto='http://3.18.61.208/'+nm;
		Prestador.updateFoto(req.params.id, new Prestador(req.body), function(err, prestador) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Prestador actualizado correctamente' });
		});
	}
};

exports.updateCedulaF = async function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Proporcione todos los campos obligatorios' });
	}else{
		const imageTempPath = req.file.path;
		const ext = path.extname(req.file.originalname)
		const nm = 'public/recursos/cedula_f_'+req.params.id+''+ext;
		const targetPath = path.resolve(nm)
		await fs.rename(imageTempPath, targetPath);
		req.body.cedula_f='http://3.18.61.208/'+nm;
		Prestador.updateCedulaF(req.params.id, new Prestador(req.body), function(err, prestador) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Prestador actualizado correctamente' });
		});
	}
};

exports.updateCedulaP = async function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Proporcione todos los campos obligatorios' });
	}else{
		const imageTempPath = req.file.path;
		const ext = path.extname(req.file.originalname)
		const nm = 'public/recursos/cedula_p_'+req.params.id+''+ext;
		const targetPath = path.resolve(nm)
		await fs.rename(imageTempPath, targetPath);
		req.body.cedula_p='http://3.18.61.208/'+nm;
		Prestador.updateCedulaP(req.params.id, new Prestador(req.body), function(err, prestador) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Prestador actualizado correctamente' });
		});
	}
};

exports.updateSoat = async function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Proporcione todos los campos obligatorios' });
	}else{
		const imageTempPath = req.file.path;
		const ext = path.extname(req.file.originalname)
		const nm = 'public/recursos/soat_p_'+req.params.id+''+ext;
		const targetPath = path.resolve(nm)
		await fs.rename(imageTempPath, targetPath);
		req.body.soat_f='http://3.18.61.208/'+nm;
		Prestador.updateSoat(req.params.id, new Prestador(req.body), function(err, prestador) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Prestador actualizado correctamente' });
		});
	}
};

exports.updateTecno = async function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Proporcione todos los campos obligatorios' });
	}else{
		const imageTempPath = req.file.path;
		const ext = path.extname(req.file.originalname)
		const nm = 'public/recursos/tecno_p_'+req.params.id+''+ext;
		const targetPath = path.resolve(nm)
		await fs.rename(imageTempPath, targetPath);
		req.body.tecno_f='http://3.18.61.208/'+nm;
		Prestador.updateTecno(req.params.id, new Prestador(req.body), function(err, prestador) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Prestador actualizado correctamente' });
		});
	}
};

exports.getPosicion = function(req, res) {
	Prestador.getPosicion(req.params.id, function(err, prestador) {
		if (err)
			res.send(err);
		res.json(prestador);
	});
};

exports.sendSMS = function(req, res) {
	const new_prestador = new Prestador(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Prestador.sendSMS(new_prestador, function(err, prestador) {
			if (err)
				res.send(err);
			res.json({error:false,message:"sms enviado!",data:prestador});
		});
	}
};
