/**
 * Created by budblack on 2017/2/14.
 */
import config from '../config.json'
console.log('now initial socketIO.', config);

var socket_server = config.io.server;
var socket        = require('socket.io-client')(socket_server);


module.exports = {
	socket: socket
}