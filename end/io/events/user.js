/**
 * Created by budblack on 2017/2/14.
 */
var logger = require('log4js').getLogger();

var onLogin = function (data) {
	logger.info('login check.', data);
};

var onLogout = function (data) {

};

module.exports = function (socket) {
	logger.trace('initial events to user region. ;) ');

	socket.on('req_login', onLogin);
	socket.on('req_logout', onLogout);
};