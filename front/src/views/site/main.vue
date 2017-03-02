<template>
    <div>
        <div>
            <com-header></com-header>
        </div>
        <div
                :class="$style.content"
                class="content-wrap">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<style lang="css" module>
    .content {
        margin-top: 58px;
    }

    .rolbar {
        width: 100%;
        height: 4px;
        background: red;
    }
</style>
<script>
    import ComHeader from './components/header.vue'
    import Vue from 'vue';
    Vue.component('com-header', ComHeader);

    import NProgress from 'nprogress'
    NProgress.configure(
            {
                minimum: 0.1,
                ease   : 'ease',
                speed  : 500,
            }
    );

    export default {
        data(){
            return {
                transitionName: 'fade'
            }
        }
    }
</script>
