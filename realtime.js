/*const fs = require( 'fs' );
const https = require( 'https' );
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: '*:*',
  credentials: false
};

app.use(cors(corsOptions));
const PUERTO = 8080; //PUERTO 8080 CHAT PERSONALES
var server = https.createServer({
	cert: fs.readFileSync('cert/cert1.crt'),
	key: fs.readFileSync('cert/privkey1.key')
}, app)

const io = require("socket.io")(server, {
  cors: {
    origins: ['*:*'],
	credentials: false
  }
});

server.listen(PUERTO, function(){
	console.log('servidor https corriendo puerto 8080');
});

io.sockets.on( 'connection', function( client ) {
	console.log('usuario conectado');
	client.on( 'notification', function( data ) {
		console.log('notificacion');
		console.log(data);
		io.sockets.emit( 'notification', { user: data.idUser, notifications: data.notification, //tarea:data.tarea,
		comentario:data.comentario, nombrUser:  'prueba'});//data.nombrUser } );
	});
	
	client.on( 'pedido', function( data ) {
		console.log('pedido');
		console.log(data);
		io.sockets.emit( 'pedido', { id_pedido: data.id_pedido, id_servicio: data.id_servicio, id_cliente: data.id_cliente, ciudad: data.ciudad,//tarea:data.tarea,
		ubicacion_recogida: data.ubicacion_r, latitud_recogida: data.latitud_r, longitud_recogida:data.longitud_r,
		ubicacion_destino: data.ubicacion_d, latitud_destino: data.latitud_d, longitud_destino:data.longitud_d,
		tipo_vehiculo: data.tipo_vh, comentario:data.comentario});//data.nombrUser } );
	});
});*/


'use strict'
//requiriendo dependencias 
const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const path = require('path')


const app = express()//instancia de express
const server = http.createServer(app)//creando el server con http y express como handle request
const io = socketio(server, {
    cors: {
      origin: '*',
      credentials: false
    }
  })//iniciando el server de socket.io
const PORT = process.env.PORT || 8081

//corriendo el servidor
server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})

io.on('connection', function(socket){
    //enviando numero aleatorio cada dos segundo al cliente
    setInterval(() => {
      socket.emit('server/random', Math.random())
    }, 2000)
    //recibiendo el numero aleatorio del cliente
    socket.on( 'pedido', function( data ) {
		io.sockets.emit( 'pedido', { id: data.id, id_servicio: data.id_servicio, id_cliente: data.id_cliente, 
            ciudad: data.ciudad, ubicacion_recogida: data.ubicacion_recogida, latitud_recogida: data.latitud_recogida, 
            longitud_recogida: data.longitud_recogida, ubicacion_destino: data.ubicacion_destino,
            latitud_destino: data.latitud_destino, longitud_destino: data.longitud_destino, 
            tipo_vehiculo: data.tipo_vehiculo, comentario: data.comentario, tomado: data.tomado, estado: data.estado});//data.nombrUser } );
	})
    socket.on( 't_pedido',function( data ) {
        console.log(data);
        io.sockets.emit( 't_pedido', { id: data.id, id_servicio: data.id_servicio, id_cliente: data.id_cliente, 
        id_prestador: data.id_prestador, ciudad: data.ciudad, ubicacion_recogida: data.ubicacion_recogida, 
        latitud_recogida: data.latitud_recogida, longitud_recogida: data.longitud_recogida,
		    ubicacion_destino: data.ubicacion_destino, latitud_destino: data.latitud_destino, longitud_destino: data.longitud_destino,
	    	tipo_vehiculo: data.tipo_vehiculo, placa_cliente: data.placa_cliente, placa_servicio: data.placa_servicio, 
        distancia: data.distancia, precio: data.precio, fecha: data.fecha, hora: data.hora, 
        comentario: data.comentario, tomado: data.tomado, estado: data.estado});
  })
})
app.use(express.static(path.join(__dirname, 'public')))//middleware de express para archivos estaticos
