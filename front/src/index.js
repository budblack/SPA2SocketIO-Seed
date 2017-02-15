require('es6-promise').polyfill();  //es6 promise
require('isomorphic-fetch');  //fetch库

var io = require('./io');

import Vue       from 'vue';
import VueRouter from 'vue-router';
import routes from './route-config';
import App from './views/app.vue'

Vue.use(VueRouter);
// 开启debug模式
Vue.config.debug = true;
window.onload    = function () {
	const router = new VueRouter(
		{
			mode: 'history',
			routes
		}
	);
	new Vue(
		{
			el    : '#app',
			router,
			render: h=>h(App)
		}
	);

};