<template>
    <div>
        <div>
            <!--<top-nav></top-nav>-->
            <div class="content-wrap">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style lang="less">


</style>
<script>
    //载入组件
    import Vue       from 'vue';
    import TopNav from './nav.vue'

    Vue.component('top-nav', TopNav);

    export default {
        data(){
            return {}
        }
    }

</script>
