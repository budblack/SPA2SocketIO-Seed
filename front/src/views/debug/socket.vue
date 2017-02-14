<template>
    <div>
        <h1>This is a socket test page.</h1>
        <div>
            <table class="table table-hover">
                <tr
                        v-for="api in socapi_list"
                >
                    <td>{{api.name}}</td>
                    <td>{{api.data}}</td>
                    <td>
                        <div>
                            <button @click="socapi_test(api.name,api.data)">Test</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import Vue       from 'vue';

    var socapi = require('../../io/socapi');

    socapi.user.do_login(
            'mock_user_login_name',
            'mock_user_login_pass'
    )

    module.exports = {
        data   : function () {
            return {
                socapi_list: [
                    {
                        name: 'api_1',
                        data: {
                            arg1: 'arg1',
                            arg2: 'arg2'
                        }
                    }, {
                        name: 'api_2',
                        data: {
                            arg1: 'arg1'
                        }
                    }
                ]
            }
        },
        methods: {
            socapi_test: function (api_name, api_data) {
                console.log('soc api test.', api_name);
            }
        }
    }
</script>
