<template>
    <header role="bar"
            :class="$style.header"
            class="mui-bar mui-bar-nav">
        <router-link to='/'>
            <h1 class="mui-title">
                <span class="mui-icon mui-icon-home mui-icon-icon-home-filled"></span>
                {{$route.path}}
            </h1>
        </router-link>
    </header>
</template>
<style lang="css" module>
    .hader {
        height: 44px;
    }
</style>
<script>
</script>
