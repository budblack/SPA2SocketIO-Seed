// require('es6-promise').polyfill();  //es6 promise
// require('isomorphic-fetch');  //fetch库
import Vue       from 'vue';
import VueRouter from 'vue-router';
import routes from './route-config';

const io  = r => require.ensure([], () => r(require('./io')));
const App = r => require.ensure([], () => r(require('./views/app.vue')));

Vue.use(VueRouter);
Vue.config.debug = true;

const router  = new VueRouter(
	{
		mode: 'history',
		routes
	}
);

window.onload = function () {
	new Vue(
		{
			el    : '#app',
			router,
			render: h=>h(App)
		}
	);
};

module.exports = {
	router: router
};