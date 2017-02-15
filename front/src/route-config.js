import Site404Page from './views/site/404.vue'

import ContentMainPage from './views/site/content/main.vue'
import ContentAboutPage from './views/site/content/about.vue'

import DebugSocketPage from './views/debug/socket.vue'

export default [
	{path: "/debug_socket", component: DebugSocketPage},

	{path: "/about", component: ContentAboutPage},
	{path: "/", component: ContentMainPage},
	{path: "*", component: Site404Page}
];
