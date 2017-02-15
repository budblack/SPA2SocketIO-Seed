<template>
    <div :class="$style.content">
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">SPA2SocketIO-Seed</h1>
        </header>
        <div class="mui-content">
            <div id="Gallery" :class=$style.Gallery>
                <div class="mui-slider-group">
                    <div class="mui-slider-item">
                        <ul class="mui-table-view mui-grid-view mui-grid-9">
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                <router-link to='/about'>
                                    <span class="mui-icon mui-icon-email">
                                        <span class="mui-badge">5</span>
                                    </span>
                                    <div class="mui-media-body">
                                        About
                                    </div>
                                </router-link>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                <router-link to='/debug_socket'>
                                    <span class="mui-icon mui-icon-eye">
                                    </span>
                                    <div class="mui-media-body">
                                        Testing
                                    </div>
                                </router-link>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                <router-link to='/user'>
                                    <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled">
                                    </span>
                                    <div class="mui-media-body">
                                        User
                                    </div>
                                </router-link>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                <router-link to='/trade'>
                                    <span class="mui-icon mui-icon-extra mui-icon-extra-gold">
                                    </span>
                                    <div class="mui-media-body">
                                        Trade
                                    </div>
                                </router-link>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                <router-link to='/404'>
                                    <span class="mui-icon mui-icon-more"></span>
                                    <div class="mui-media-body">more</div>
                                </router-link>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                <router-link to='/about'>
                                    <span class="mui-icon mui-icon-email">
                                        <span class="mui-badge">5</span>
                                    </span>
                                    <div class="mui-media-body">
                                        About
                                    </div>
                                </router-link>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                <router-link to='/debug_socket'>
                                    <span class="mui-icon mui-icon-eye">
                                    </span>
                                    <div class="mui-media-body">
                                        Testing
                                    </div>
                                </router-link>
                            </li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                                <router-link to='/404'>
                                    <span class="mui-icon mui-icon-more"></span>
                                    <div class="mui-media-body">more</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mui-slider-indicator">
                    <div class="mui-indicator mui-active"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" module>
    .Gallery {
        margin-top: 15px;
    }
</style>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>
