-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-12-2021 a las 01:52:18
-- Versión del servidor: 5.7.14
-- Versión de PHP: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `servicios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `organizacion` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`id`, `nombre`, `apellido`, `email`, `telefono`, `organizacion`, `password`, `created_at`, `updated_at`) VALUES
(1, 'jhon', 'jader', 'estradajhon07@gmail.com', '3184535680', 'programando', '12345678', '2021-07-19 00:00:00', '2021-07-19 00:00:00'),
(2, 'dani jose', 'estrada', 'prueba@prueba.com', '3211234567', 'progrmando', 'abcd1234', '2021-07-19 17:12:36', '2021-07-19 17:12:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `codigo` int(8) DEFAULT NULL,
  `verificado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `apellido`, `email`, `telefono`, `password`, `created_at`, `updated_at`, `codigo`, `verificado`) VALUES
(2, 'cliente', '1', 'cliente@prueba.com', '321 1111111', '1111111111', '2021-07-21 17:42:07', '2021-07-21 17:42:07', NULL, 0),
(3, 'jesus alberto', '--', 'ja@gmail.com', '316 3000357', 'abc123', '2021-08-05 22:24:41', '2021-08-05 22:24:41', NULL, 1),
(19, 'jader', '--', 'jajajaja@jajaja', '318 4535680', 'jad123', '2021-08-18 16:13:47', '2021-08-18 16:13:47', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
--

CREATE TABLE `pago` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_servicio` int(11) NOT NULL,
  `monto` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_prestador` int(11) DEFAULT NULL,
  `id_servicio` int(11) NOT NULL,
  `ubicacion_recogida` varchar(2000) NOT NULL,
  `latitud_recogida` double NOT NULL,
  `longitud_recogida` double NOT NULL,
  `ubicacion_destino` varchar(2000) DEFAULT NULL,
  `latitud_destino` double DEFAULT NULL,
  `longitud_destino` double DEFAULT NULL,
  `placa_servicio` varchar(20) DEFAULT NULL,
  `placa_cliente` varchar(20) NOT NULL,
  `tipo_vehiculo` int(11) NOT NULL,
  `peso` varchar(20) DEFAULT NULL,
  `distancia` varchar(20) DEFAULT NULL,
  `ciudad` varchar(300) NOT NULL,
  `precio` varchar(200) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `comentario` varchar(500) NOT NULL,
  `tomado` int(1) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`id`, `id_cliente`, `id_prestador`, `id_servicio`, `ubicacion_recogida`, `latitud_recogida`, `longitud_recogida`, `ubicacion_destino`, `latitud_destino`, `longitud_destino`, `placa_servicio`, `placa_cliente`, `tipo_vehiculo`, `peso`, `distancia`, `ciudad`, `precio`, `fecha`, `hora`, `comentario`, `tomado`, `estado`) VALUES
(18, 3, NULL, 1, 'Cl. 7 Sur #67-3, Buenaventura, Valle del Cauca, Colombia', 111111, 111111, 'Cosmos Pacífico Hotel, Calle 3, Buenaventura, Valle del Cauca, Colombia', NULL, NULL, '', 'sc34', 1, NULL, '11.6 km', 'Buenaventura', '15', '2021-08-13', '21:58:11', '', 0, 0),
(19, 3, 1, 2, 'Cl. 7 Sur #67-3, Buenaventura, Valle del Cauca, Colombia', 3.8617440999999997, -76.99844999999999, 'Cosmos Pacifico Hotel, Calle 1a, Buenaventura, Valle del Cauca, Colombia', 3.8836513, -77.073785, '', 'awffw7', 2, NULL, '11.3 km', 'Buenaventura', '15', '2021-08-19', '23:12:45', '---', 1, 1),
(20, 3, NULL, 2, 'Cl. 7a Sur #66-66, Buenaventura, Valle del Cauca, Colombia', 3.8617638999999997, -76.9985138, 'La 14, Calle 5b, Buenaventura, Valle del Cauca, Colombia', 3.8829119, -77.0204724, '', 'WER345', 2, NULL, '4.5 km', 'Buenaventura', '20000', '2021-08-20', '12:59:07', '---', 0, 0),
(21, 3, NULL, 2, 'Cl. 7a Sur #66-66, Buenaventura, Valle del Cauca, Colombia', 3.8617598999999996, -76.99851629999999, 'Cosmos Pacifico Hotel, Calle 1a, Buenaventura, Valle del Cauca, Colombia', 3.8836513, -77.073785, '', 'WER345', 2, NULL, '11.3 km', 'Buenaventura', '100000', '2021-08-20', '13:00:09', '---', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precio`
--

CREATE TABLE `precio` (
  `id` int(11) NOT NULL,
  `valor` double NOT NULL,
  `min` double NOT NULL,
  `max` double NOT NULL,
  `peso` double DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `precio`
--

INSERT INTO `precio` (`id`, `valor`, `min`, `max`, `peso`) VALUES
(1, 20000, 0, 5, 0),
(2, 60000, 6, 10, 0),
(3, 100000, 11, 15, 0),
(4, 200000, 16, 20, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestador`
--

CREATE TABLE `prestador` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `cedula` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `organizacion` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `verificado` int(11) NOT NULL,
  `id_servicio` int(11) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  `latitud` double DEFAULT NULL,
  `longitud` double DEFAULT NULL,
  `foto` varchar(1000) DEFAULT NULL,
  `cedula_f` varchar(1000) DEFAULT NULL,
  `cedula_p` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `prestador`
--

INSERT INTO `prestador` (`id`, `nombre`, `apellido`, `cedula`, `email`, `telefono`, `organizacion`, `password`, `created_at`, `updated_at`, `verificado`, `id_servicio`, `codigo`, `latitud`, `longitud`, `foto`, `cedula_f`, `cedula_p`) VALUES
(1, 'jhon', 'jader', '1235139245', 'estrada_jhon@hotmail.com', '318 4535680', 'programando', 'jhon1998', '2021-07-28 00:00:00', '2021-07-28 00:00:00', 1, 2, NULL, NULL, NULL, 'http://3.18.61.208/public/recursos/perfil_1.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `servicio`
--

INSERT INTO `servicio` (`id`, `nombre`, `descripcion`) VALUES
(1, 'mecanico', 'mecanico para problemas'),
(2, 'grua', 'grua para transportar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_vh`
--

CREATE TABLE `tipo_vh` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_vh`
--

INSERT INTO `tipo_vh` (`id`, `nombre`) VALUES
(1, 'moto'),
(2, 'carro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `verificar`
--

CREATE TABLE `verificar` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `codigo` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `pago`
--
ALTER TABLE `pago`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_servicio` (`id_servicio`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_prestador` (`id_prestador`),
  ADD KEY `id_servicio` (`id_servicio`);

--
-- Indices de la tabla `precio`
--
ALTER TABLE `precio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prestador`
--
ALTER TABLE `prestador`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telefono` (`telefono`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_servicio` (`id_servicio`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `tipo_vh`
--
ALTER TABLE `tipo_vh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `verificar`
--
ALTER TABLE `verificar`
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT de la tabla `pago`
--
ALTER TABLE `pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT de la tabla `precio`
--
ALTER TABLE `precio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `prestador`
--
ALTER TABLE `prestador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `servicio`
--
ALTER TABLE `servicio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tipo_vh`
--
ALTER TABLE `tipo_vh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `verificar`
--
ALTER TABLE `verificar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pago`
--
ALTER TABLE `pago`
  ADD CONSTRAINT `pago_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pago_ibfk_2` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pago_ibfk_3` FOREIGN KEY (`id_servicio`) REFERENCES `servicio` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`id_prestador`) REFERENCES `prestador` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_ibfk_3` FOREIGN KEY (`id_servicio`) REFERENCES `servicio` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `prestador`
--
ALTER TABLE `prestador`
  ADD CONSTRAINT `prestador_ibfk_1` FOREIGN KEY (`id_servicio`) REFERENCES `servicio` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
