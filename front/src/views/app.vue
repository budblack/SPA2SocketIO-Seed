<template>
    <body id="app" class="gray-bg">
    <!--你也可以在其他地方使用<router-view></router-view>来创建嵌套路由，详见vue-router文档-->
    <div>
        <app-main></app-main>
    </div>
    </body>
</template>
<style lang="less">

</style>
<script>
    import '../static/css/mui.css'
    import '../static/css/icons-extra.css'
    import '../static/css/transition.css'
    import '../static/js/mui'
    import Vue from 'vue';

    import main from './site/main.vue'
    // const main = r => require.ensure([], () => {r(require('./site/main.vue'));});
    Vue.component('app-main', main);
</script>
