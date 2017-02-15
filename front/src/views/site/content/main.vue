<template>
    <div class="content">
        <!-- banner -->
        <div class="banner">
            <div id="kb" class="carousel kb_elastic animate_text kb_wrapper" data-ride="carousel"
                 data-interval="6000" data-pause="hover">
                <!-- Wrapper-for-Slides -->
                <div class="carousel-inner" role="listbox">
                    <!-- First-Slide -->
                    <div class="item active">
                        <div class="banner-img">
                            <div class="carousel-caption kb_caption">
                                <h3 data-animation="animated flipInX">Real estate</h3>
                            </div>
                        </div>
                    </div>
                    <!-- Second-Slide -->
                    <div class="item">
                        <div class="banner-img banner-img1">
                            <div class="carousel-caption kb_caption kb_caption_right">
                                <h3 data-animation="animated flipInX">Dream Home</h3>
                            </div>
                        </div>
                    </div>
                    <!-- Third-Slide -->
                    <div class="item">
                        <div class="banner-img banner-img2">
                            <div class="carousel-caption kb_caption kb_caption_center">
                                <h3 data-animation="animated flipInX">Latest Design</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Left-Button -->
                <a class="left carousel-control kb_control_left" href="#kb" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <!-- Right-Button -->
                <a class="right carousel-control kb_control_right" href="#kb" role="button"
                   data-slide="next">
                    <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <!-- //banner -->
        <!-- welcome -->
        <div class="welcome">
            <h3 class="w3ls-title">Welcome !</h3>
            <p class="w3title-text">Sed porta magna vitae nisl lacinia orbi malesuada sollic itudin
                tortor </p>
            <div class="welcome-info">
                <div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                    <ul id="myTab" class=" nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#home" id="home-tab" role="tab"
                                                                  data-toggle="tab" aria-controls="home"
                                                                  aria-expanded="true">
                            <span class="glyphicon glyphicon-briefcase"></span>
                            <h5>Buying</h5>
                        </a></li>
                        <li role="presentation"><a href="#carl" role="tab" id="carl-tab" data-toggle="tab"
                                                   aria-controls="carl">
                            <span class="glyphicon glyphicon-signal"></span>
                            <h5>Selling</h5>
                        </a></li>
                        <li role="presentation"><a href="#james" role="tab" id="james-tab" data-toggle="tab"
                                                   aria-controls="james">
                            <span class="glyphicon glyphicon-home"></span>
                            <h5>Rental</h5>
                        </a></li>
                    </ul>
                    <div class="clearfix"></div>
                    <div id="myTabContent" class="tab-content">
                        <div role="tabpanel" class="tab-pane fade in active" id="home"
                             aria-labelledby="home-tab">
                            <div class="tabcontent-grids">
                                <h4>Find Your Buying Property</h4>
                                <form action="#" method="post">
                                    <input type="search" name="Search" placeholder="Your City..."
                                           required="">
                                    <button type="submit" class="btn btn-default" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </form>
                                <a href="#small-dialog2" class="w3-search popup-top-anim"> Advanced
                                    Search</a>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="carl" aria-labelledby="carl-tab">
                            <div class="tabcontent-grids">
                                <h4>Search Your Selling property</h4>
                                <form action="#" method="post">
                                    <input type="search" name="Search" placeholder="Your City..."
                                           required="">
                                    <button type="submit" class="btn btn-default" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </form>
                                <a href="#small-dialog2" class="w3-search popup-top-anim"> Advanced
                                    Search</a>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="james" aria-labelledby="james-tab">
                            <div class="tabcontent-grids">
                                <h4>Find Your Wish Rental Property</h4>
                                <form action="#" method="post">
                                    <input type="search" name="Search" placeholder="Your City..."
                                           required="">
                                    <button type="submit" class="btn btn-default" aria-label="Left Align">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </form>
                                <a href="#small-dialog2" class="w3-search popup-top-anim"> Advanced
                                    Search</a>
                            </div>
                        </div>
                    </div>
                    <!-- modal-three -->
                    <div id="small-dialog2" class="mfp-hide">
                        <div class="login-modal w3ls-search">
                            <div class="booking-info">
                                <h3><a href="main.html">Fortune Estates</a></h3>
                            </div>
                            <div class="login-form">
                                <form action="#" method="post">
                                    <input type="text" name="city name" placeholder="City Name..."
                                           required="">
                                    <input type="number" name="rooms" placeholder="Bed Rooms" min="1"
                                           required="">
                                    <input type="number" name="rooms" placeholder="Bath rooms" min="1"
                                           required="">
                                    <div class="price">
                                        <span class="glyphicon glyphicon-usd" aria-hidden="true"></span>
                                        <input type="text" placeholder="From" required="">
                                    </div>
                                    <div class="price price-right">
                                        <span class="glyphicon glyphicon-usd" aria-hidden="true"></span>
                                        <input type="text" placeholder="To" required="">
                                    </div>
                                    <select class="form-control">
                                        <option value="">Rental</option>
                                        <option value="">Buy</option>
                                        <option value="">sale</option>
                                    </select>
                                    <input type="submit" value="Search">
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- //modal-three -->
                </div>
            </div>
        </div>
        <!-- //welcome -->
        <!-- properties -->
        <div class="w3agile properties">
            <div class="properties-top">
                <h3 class="w3ls-title">Our Properties</h3>
                <p class="w3title-text">Lorem Ipsum has been industry's dummy text ever standard remember
                    when your team is playing. </p>
            </div>
            <div class="properties-bottom">
                <div class="properties-img">
                    <img src="../../../static/asset/images/3.jpg" alt="">
                    <div class="view-caption">
                        <h4><span class="glyphicon glyphicon-map-marker"></span> Broome St, Canada, USA
                        </h4>
                    </div>
                    <div class="w3ls-buy">
                        <a href="single.html">Buy</a>
                    </div>
                </div>
                <div class="w3ls-text">
                    <h5><a href="single.html">Donec at vulputate</a></h5>
                    <h6>$500k</h6>
                    <p><b>Area :</b> 2,145 sq.ft </p>
                    <p><b>Bed Rooms :</b> 2 </p>
                </div>
            </div>
            <div class="properties-bottom">
                <div class="properties-img">
                    <img src="../../../static/asset/images/2.jpg" alt="">
                    <div class="view-caption rent-caption">
                        <h4><span class="glyphicon glyphicon-map-marker"></span> Liberty 2St, New York, USA
                        </h4>
                    </div>
                    <div class="w3ls-buy">
                        <a href="single.html" class="rent">Rent</a>
                    </div>
                </div>
                <div class="w3ls-text">
                    <h5><a href="single.html">Vulputate donec at </a></h5>
                    <h6>$3000</h6>
                    <p><b>Area :</b> 2,145 sq.ft </p>
                    <p><b>Bed Rooms :</b> 2 </p>
                </div>
            </div>
            <div class="properties-bottom">
                <div class="properties-img">
                    <img src="../../../static/asset/images/1.jpg" alt="">
                    <div class="view-caption">
                        <h4><span class="glyphicon glyphicon-map-marker"></span> 21B St, Washington, USA
                        </h4>
                    </div>
                    <div class="w3ls-buy">
                        <a href="single.html">Buy</a>
                    </div>
                </div>
                <div class="w3ls-text">
                    <h5><a href="single.html">Ecat vulputate </a></h5>
                    <h6>$810K</h6>
                    <p><b>Area :</b> 2,145 sq.ft </p>
                    <p><b>Bed Rooms :</b> 2 </p>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <!-- //properties -->
        <!-- brands -->
        <div class="w3agile brands">
            <h3 class="w3ls-title">Our Clients</h3>
            <div class="brands-info">
                <div class="brand-grids">
                    <a href="#"><img src="../../../static/asset/images/b1.jpg" alt=""/></a>
                </div>
                <div class="brand-grids">
                    <a href="#"><img src="../../../static/asset/images/b2.jpg" alt=""/></a>
                </div>
                <div class="brand-grids">
                    <a href="#"><img src="../../../static/asset/images/b3.jpg" alt=""/></a>
                </div>
                <div class="brand-grids">
                    <a href="#"><img src="../../../static/asset/images/b4.jpg" alt=""/></a>
                </div>
                <div class="brand-grids">
                    <a href="#"><img src="../../../static/asset/images/b5.jpg" alt=""/></a>
                </div>
                <div class="brand-grids">
                    <a href="#"><img src="../../../static/asset/images/b6.jpg" alt=""/></a>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <!-- //brands -->
        <!-- footer -->
        <div class="w3agile footer">
            <div class="social-icons">
                <ul>
                    <li><a href="#"> </a></li>
                    <li><a href="#" class="fb"> </a></li>
                    <li><a href="#" class="gp"> </a></li>
                    <li><a href="#" class="drb"> </a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="footer-nav">
                <ul>
                    <li><a href="main.html"> Home </a></li>
                    <li><a href="about.html"> About </a></li>
                    <li><a href="property.html"> Properties </a></li>
                    <li><a href="gallery.html"> Gallery</a></li>
                    <li><a href="contact.html"> Contact </a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="footer-text">
                <p>Copyright &copy; 2016.Company name All rights reserved.<a target="_blank"
                                                                             href="http://sc.chinaz.com/moban/">
                    &#x7F51;&#x9875;&#x6A21;&#x677F;</a></p>
            </div>
        </div>
    </div>
</template>
<style>
</style>
<script>
</script>
