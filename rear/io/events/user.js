/**
 * Created by budblack on 2017/2/14.
 */
var logger = require('log4js').getLogger();
var User   = require('../controls/user');

var onLogin = function (data) {
	logger.info('login check.', data);
	User.Login(data.login_name, data.login_pass);
};

var onLogout = function (data) {
	logger.info('logout action.', data);
};

module.exports = function (socket) {
	logger.trace('initial events to user region. ;) ');

	socket.on('req_login', onLogin);
	socket.on('req_logout', onLogout);
};