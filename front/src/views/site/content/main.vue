<template>
    <div :class="$style.content">
        <h1>Main Content.</h1>

        <div class="current"></div>
        <div></div>
    </div>
</template>
<style lang="less" module>
    :local(.content) {
        color: red
    }
</style>
<script>
    export default {
        data(){
            return {

            }
        }
    }

</script>
