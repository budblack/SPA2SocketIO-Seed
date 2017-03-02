<template>
    <div>
        <div class="mui-content">
            <form id='login-form' class="mui-input-group">
                <div class="mui-input-row">
                    <label>账号</label>
                    <input id='account' type="text"
                           class="mui-input-clear mui-input"
                           v-model="user.login_name"
                           :placeholder="user.login_name_placeholder">
                </div>
                <div class="mui-input-row">
                    <label>密码</label>
                    <input id='password' type="password"
                           class="mui-input-clear mui-input"
                           v-model="user.login_pass"
                           :placeholder="user.login_pass_placeholder">
                </div>
            </form>
            <form class="mui-input-group">
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell">
                        自动登录
                        <div id="autoLogin"
                             @toggle="switch_autologin"
                             class="mui-switch">
                            <div
                                    class="mui-switch-handle"></div>
                        </div>
                    </li>
                </ul>
            </form>
            <div class="mui-content-padded">
                <button id='login' @click="do_login()"
                        class="mui-btn mui-btn-block mui-btn-primary">登录
                </button>
                <div class="link-area"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a
                        id='forgetPassword'>忘记密码</a>
                </div>
            </div>
            <div class="mui-content-padded oauth-area">

            </div>
        </div>
    </div>
</template>
<style lang="css">
    .area {
        margin: 20px auto 0px auto;
    }

    .mui-input-group {
        margin-top: 10px;
    }

    .mui-input-group:first-child {
        margin-top: 20px;
    }

    .mui-input-group label {
        width: 22%;
    }

    .mui-input-row label ~ input,
    .mui-input-row label ~ select,
    .mui-input-row label ~ textarea {
        width: 78%;
    }

    .mui-checkbox input[type=checkbox],
    .mui-radio input[type=radio] {
        top: 6px;
    }

    .mui-content-padded {
        margin-top: 25px;
    }

    .mui-btn {
        padding: 10px;
    }

    .link-area {
        display: block;
        margin-top: 25px;
        text-align: center;
    }

    .spliter {
        color: #bbb;
        padding: 0px 8px;
    }

    .oauth-area {
        position: absolute;
        bottom: 20px;
        left: 0px;
        text-align: center;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }

    .oauth-area .oauth-btn {
        display: inline-block;
        width: 50px;
        height: 50px;
        background-size: 30px 30px;
        background-position: center center;
        background-repeat: no-repeat;
        margin: 0px 20px;
        /*-webkit-filter: grayscale(100%); */
        border: solid 1px #ddd;
        border-radius: 25px;
    }

    .oauth-area .oauth-btn:active {
        border: solid 1px #aaa;
    }

    .oauth-area .oauth-btn.disabled {
        background-color: #ddd;
    }
</style>
<script>
    import user_storage from '../../../storage/user'
    var login_info = user_storage.login_info;
    console.log('读取本地缓存的登录信息', user_storage.login_info);
    var vm = {
        user  : {
            login_name            : login_info.login_name || '',
            login_name_placeholder: '请输入账号',
            login_pass            : login_info.login_pass || '',
            login_pass_placeholder: '请输入密码',
        },
        config: {
            is_autologin: login_info.is_autologin || false
        }
    }

    const mui = require('../../../static/js/mui')

    $(document).ready(
            function () {
                if (vm.config.is_autologin) {
                    $('#autoLogin').addClass('mui-active');
                }
                mui('.mui-switch').switch();
            }
    );

    export default {
        data(){
            return vm
        },
        methods: {
            switch_autologin: function (event) {
                vm.config.is_autologin = event.detail.isActive;
                console.log('switch_autologin', vm.config.is_autologin);
            },
            do_login        : function (login_name = vm.user.login_name, login_pass = vm.user.login_pass) {
                var login_info = {
                    login_name  : login_name,
                    login_pass  : login_pass,
                    device_hash : '',
                    token       : '',
                    is_autologin: vm.config.is_autologin
                };
                if (
                        user_storage.login_info.login_name == login_info.login_name
                        && user_storage.login_info.login_pass == login_info.login_pass
                        && user_storage.login_info.device_hash == login_info.device_hash
                        && user_storage.login_info.token == login_info.token
                        && user_storage.login_info.is_autologin == login_info.is_autologin
                ) {

                }
                else {
                    user_storage.login_info = login_info;
                    console.trace('更新本地缓存的登录信息', user_storage.login_info);
                }
            },

        },
        beforeRouteEnter (to, from, next) {

            next();
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当钩子执行前，组件实例还没被创建
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是改组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            next();
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            next();
        }
    }
</script>