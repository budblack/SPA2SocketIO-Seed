<template>
    <div>
        <div class="mui-content">
            <transition name="fade">
                <div v-if="show">
                    <router-link to='/'>Back Home</router-link>
                </div>
            </transition>
            <button @click='toggle'>btn</button>
        </div>
    </div>
</template>
<style lang="less" module>
    :local(.title) {
    }
</style>
<script>
    import ComHeader from '../components/header.vue'
    import Vue from 'vue';
    Vue.component('com-header', ComHeader);

    export default {
        data(){
            return {
                show: true
            }
        },
        methods: {
            toggle: function () {
                console.log('toggle');
                this.show = !this.show;
            }
        }
    }
</script>
