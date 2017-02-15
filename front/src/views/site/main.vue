<template>
    <div class="content-wrap">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<style lang="less">
</style>
<script>
    // import Vue from 'vue';
    export default {
        data(){
            return {
                transitionName: 'fade'
            }
        },
    }
</script>
