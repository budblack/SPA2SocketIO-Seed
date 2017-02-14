<template>
    <div>
        <h1>This is a socket test page.</h1>
    </div>
</template>
<style>

</style>
<script>
    var socapi = require('../../io/socapi');
    socapi.user.do_login(
            'mock_user_login_name',
            'mock_user_login_pass'
    )
</script>
