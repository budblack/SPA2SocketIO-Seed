<template>
    <body id="app" class="gray-bg">
    <!--你也可以在其他地方使用<router-view></router-view>来创建嵌套路由，详见vue-router文档-->
    <div>
        <app-main></app-main>
    </div>
    </body>
</template>
<style>

</style>
<script>
    import main from './site/main.vue'
    import Vue       from 'vue';
    Vue.component('app-main', main);

    require('../../bower_components/bootstrap/dist/css/bootstrap.min.css');
    require('../../bower_components/bootstrap/dist/js/bootstrap.min.js');
    require('../static/asset/css/style.min.css');
</script>
