/**
 * Created by budblack on 2017/2/14.
 */
var logger = require('log4js').getLogger();

var user_login_check = function (
	login_name,
	login_pass
) {
	logger.trace('user_login_check, Name: ', login_name);

};

module.exports = {
	Login: user_login_check
};