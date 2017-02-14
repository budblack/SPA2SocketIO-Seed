/**
 * Created by budblack on 2017/2/14.
 */

console.log('now initial socketIO.');

var socket_server = 'http://127.0.0.1:2048';
var socket        = require('socket.io-client')(socket_server);


module.exports = {
	socket: socket
}