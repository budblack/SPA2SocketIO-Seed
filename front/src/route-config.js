import SiteIndexPage from './views/site/index.vue'
import SiteLoginPage from './views/site/login.vue'

import Site404Page from './views/site/404.vue'

import DebugSocketPage from './views/debug/socket.vue'

export default [
	{path: "/debug_socket", component: DebugSocketPage},

	{path: "/do_login", component: SiteLoginPage},

	{path: "/", component: SiteIndexPage},
	{path: "*", component: Site404Page}
];
