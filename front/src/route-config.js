const Site404Page = r => require.ensure([], () => r(require('./views/site/content/404.vue')), 'group-site');

const Main        = r => require.ensure([], () => r(require('./views/site/content/main.vue')));
const DebugSocket = r => require.ensure([], () => r(require('./views/debug/socket.vue')));
const About       = r => require.ensure([], () => r(require('./views/site/content/about.vue')));

export default [
	{path: "/debug_socket", component: DebugSocket},
	{path: "/about", component: About},
	{path: "/", component: Main},
	{path: "*", component: Site404Page}
];
