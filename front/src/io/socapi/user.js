/**
 * Created by budblack on 2017/2/14.
 */
import io from '../index'

var login = function (login_name = '', login_pass = '') {
	io.socket.emit(
		'req_login', {
			login_name: login_name,
			login_pass: login_pass
		}
	)
};

module.exports = {
	do_login: login
};