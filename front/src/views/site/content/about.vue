<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">
                ABOUT ME
            </h1>
        </header>
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
