function nav() {
    return `        <div id="nav_up">
    <div id="nav_up_space"></div>
    <div id="nav_up_cont">
        <a id="store" href="https://www.google.com/maps/search/near+reliance+digital/@28.4669506,77.3402995,10.14z"><i class="fa-solid fa-location-dot"></i> Find a
            store</a><span></span>
        <a id="buying">Buying guides</a><span></span>
        <a id="contact">Contact us</a>
    </div>
</div>
<div id="nav_main">
    <div id="nav_img">
        <a href="index.html"><img src="	https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt=""></a>
    </div>
    <div id="nav_input">

        <div class="suggestion__box">
            <input type="text" class="suggestion__input" placeholder="Find your favorite products"
                autocomplete="off" value=""><button type="button" id="SearchButton">
                <i class="fa fa-search"></i>
            </button>
        </div>
    </div>
    <div id="nav_link">
        <a id="store"><i class="fa-solid fa-location-dot"></i> Deliver to Agra 282010</a><span></span>
        <a id="buying" href="cart.html"><i class="fa fa-shopping-cart header__maininfo__list__item__icon" aria-hidden="true"></i>
            Cart</a><span></span>
        <a id="contact" class="login_G" href="login.html"><i class="fa fa-user header__maininfo__list__item__icon" aria-hidden="true"></i>
            Login</a>
    </div>
</div>`
}

function category() {
    return `<div class="cate" id="mobile"><a href="./mobile.html">MOBILES & TABLETS</a> <span
    class="fa fa-angle-down ml__4"></span></div>
<div class="cate" value="abcd" id="tv"><a href="./tv.html">TV & AUDIO</a> <span class="fa fa-angle-down ml__4"></span></div>
<div class="cate" id="appliance"><a href="./application.html">HOME APPLIANCES</a> <span class="fa fa-angle-down ml__4"></span></div>
<div class="cate" id="copmuter"><a href="./computer.html">COMPUTERS</a> <span class="fa fa-angle-down ml__4"></span></div>
<div class="cate" id="camera"><a href="./camera.html">CAMERAS</a> <span class="fa fa-angle-down ml__4"></span></div>
<div class="cate" id="kitchen"><a href="./kitchen.html">KITCHEN APPLIANCES</a> <span class="fa fa-angle-down ml__4"></span></div>
<div class="cate" id="personal"><a href="./care.html">PERSONAL CARE</a> <span class="fa fa-angle-down ml__4"></span></div>
<div class="cate" id="accessory"><a href="./accessory.html">ACCESSORIES</a> <span class="fa fa-angle-down ml__4"></span></div>
`
}

function foot() {
    return `        <div id="foot">
    <div id="footer_over">
        <div id="footer">
            <div id="footer__container">
                <div class="foot_data">
                    <h5>PRODUCT CATEGORIES</h5>

                    <p><a>Smartphones</a></p>
                    <p><a>Laptops</a></p>
                    <p><a>DSLR Cameras</a></p>
                    <p><a>Televisions</a></p>
                    <p><a>Air
                            Conditioners</a></p>
                    <p><a>Refrigerators</a></p>
                    <p><a>Kitchen
                            Appliances</a></p>
                    <p><a>Accessories</a></p>
                    <p><a Grooming</a></p>

                </div>
                <div class="foot_data">
                    <h5>SITE INFO</h5>

                    <p><a>About Reliance Digital</a>
                    </p>
                    <p><a>resQ Services</a></p>
                    <p><a>Site Map</a></p>
                    <p><a>Gift Cards</a></p>
                    <p><a>Corporate
                            Enquires</a></p>
                    <p><a>Contact Us</a></p>

                </div>
                <div class="foot_data">
                    <h5>RESOURCE CENTRE</h5>

                    <p><a>Product Reviews</a></p>
                    <p><a>Buying Guides</a></p>
                    <p><a>How Tos</a></p>
                    <p><a>Featured Stories</a></p>
                    <p><a>Events &amp; Happenings</a></p>

                </div>
                <div class="foot_data">
                    <h5>POLICIES</h5>

                    <p><a>Terms of Use</a>
                    </p>
                    <p><a>FAQs</a></p>
                    <p><a>Cancellation and Return
                            Policy</a></p>
                    <p><a>Privacy Policy</a></p>
                    <p><a>Shipping
                            and Delivery Policy</a></p>
                    <p><a>E-waste Policy</a></p>
                    <p><a>EMI Terms &amp;
                            Conditions</a></p>
                    <p><a>Pricing and
                            Payments Policy</a></p>
                    <p><a>RelianceOne Loyalty T &amp;
                            C</a></p>

                </div>
            </div>
            <div id="footer_link">
                <div id="foot_link_left">
                    <h3>FOLLOW US</h3>
                    <div class="footer__listLinks">
                        <a><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                        <a><i class="fa fa-twitter" aria-hidden="true"></i></a>

                        <a><i class="fa fa-youtube" aria-hidden="true"></i></a>


                    </div>
                </div>
                <div id="foot_link_middle">
                    <h3>
                        EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h3>
                    <img id="google"
                        src="	https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="">
                    <img id="app"
                        src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div id="title_Disc">
        <div class="title">Disclaimer</div>
        <p>Product prices,
            offers and availability are subject to change from time to time. All prices are
            inclusive of taxes. Product colours &amp; images are only for illustration and
            they may not exactly match with the actual product. Product specs are subject to
            change &amp; may vary from actual product. While every care is taken to avoid
            inaccuracies in content, these are provided as is, without warranty of any
            kind.</p>
        <div id="last_para">
            <p>© 2022 Reliance
                Digital. All Rights Reserved.</p>
        </div>
    </div>

</div>`
}

export { nav, category, foot }