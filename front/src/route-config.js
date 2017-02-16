const Site404Page = r => require.ensure([], () => r(require('./views/site/content/404.vue')), 'group-site');

const Main  = r => require.ensure([], () => {r(require('./views/site/content/main.vue'));});
const User  = r => require.ensure([], () => {r(require('./views/site/content/user.vue'));});
const About = r => require.ensure([], () => {r(require('./views/site/content/about.vue'));});
const Login = r => require.ensure([], () => {r(require('./views/site/content/login.vue'));});

const Trade = r => require.ensure([], () => {r(require('./views/site/content/trade.vue'));});

const DebugSocket = r => require.ensure([], () => r(require('./views/debug/socket.vue')));
export default [
	{path: "/debug_socket", component: DebugSocket},
	{path: "/about", component: About},
	{path: "/login", component: Login},
	{path: "/trade", component: Trade},
	{path: "/user", component: User},
	{path: "/", component: Main},
	{path: "*", component: Site404Page}
];
