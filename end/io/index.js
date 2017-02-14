/**
 * Created by budblack on 2017/2/14.
 */
var logger = require('log4js').getLogger();

var on_connection = function (socket) {
	logger.trace('initial io on_connection event.');
	require('./events')(socket);
};


module.exports = function (server) {
	logger.trace('initial io module.');

	var io = require('socket.io')(server);
	io.on('connection', on_connection);
};