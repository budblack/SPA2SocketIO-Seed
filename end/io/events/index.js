/**
 * Created by budblack on 2017/2/14.
 */
var logger = require('log4js').getLogger();

module.exports = function (socket) {
	logger.trace('initial io events.');

	require('./site')(socket);
	require('./user')(socket);
};