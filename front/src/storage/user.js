/**
 * Created by budblack on 2017/2/16.
 */

import store from 'store'

console.log('user_storage has been initited.');

var login_info_default = {
	login_name : '',
	login_pass : '',
	device_hash: '',
	token      : ''
};

module.exports = {
	get login_info() {
		return store.get('login_info') || login_info_default;
	},
	set login_info(value) {
		store.set('login_info', value);
	}
}