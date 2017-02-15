<template>
    <div class="header">
        <div class="menu-icon">
            <button class="menu-button" id="open-button">O</button>
        </div>
        <div class="logo">
            <h2>
                <router-link to="/">
                    <i class="glyphicon glyphicon-home"></i>
                </router-link>
            </h2>
        </div>
        <div class="login">
            <a href="#small-dialog" class="sign-in popup-top-anim"><span
                    class="glyphicon glyphicon-user"></span></a>
            <!-- modal -->
            <div id="small-dialog" class="mfp-hide">
                <div class="login-modal">
                    <div class="booking-info">
                        <h3><a href="main.html">Fortune Estates</a></h3>
                    </div>
                    <div class="login-form">
                        <form action="#" method="post">
                            <div class="styled-input">
                                <input type="text" name="Username" required=""/>
                                <label>Username</label>
                                <span></span>
                            </div>
                            <div class="styled-input">
                                <input type="password" name="Password" required="">
                                <label>Password</label>
                                <span></span>
                            </div>
                            <div class="wthree-text">
                                <ul>
                                    <li>
                                        <input type="checkbox" id="brand" value="">
                                        <label for="brand"><span></span> Remember me ?</label>
                                    </li>
                                    <li><a href="#">Forgot password?</a></li>
                                </ul>
                                <div class="clear"></div>
                            </div>
                            <input type="submit" value="Sign In">
                        </form>
                        <p>Don’t have an account ?<a href="#small-dialog1" class="sign-in popup-top-anim">
                            Sign Up</a></p>
                    </div>
                </div>
            </div>
            <!-- //modal -->
            <!-- modal-two -->
            <div id="small-dialog1" class="mfp-hide">
                <div class="login-modal">
                    <div class="booking-info">
                        <h3><a href="main.html">Fortune Estates</a></h3>
                    </div>
                    <div class="login-form signup-form">
                        <form action="#" method="post">
                            <div class="styled-input">
                                <input type="text" name="Username" required=""/>
                                <label>Username</label>
                                <span></span>
                            </div>
                            <div class="styled-input">
                                <input type="text" name="email" required=""/>
                                <label>Email</label>
                                <span></span>
                            </div>
                            <div class="styled-input">
                                <input type="password" name="Password" required="">
                                <label>Password</label>
                                <span></span>
                            </div>
                            <div class="wthree-text">
                                <input type="checkbox" id="brand1" value="">
                                <label for="brand1"><span></span>I accept the terms of use</label>
                            </div>
                            <input type="submit" value="Sign Up">
                        </form>
                    </div>
                </div>
            </div>
            <!-- //modal-two -->
        </div>
        <div class="clearfix"></div>
    </div>
</template>
<style>

</style>
<script>

</script>
