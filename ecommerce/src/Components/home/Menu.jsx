import React from 'react';

const Menu=()=> {
  return (
    <div>
            {/* <!-- Offcanvas Menu Begin --> */}
    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="offcanvas__option">
            <div class="offcanvas__links">
                <a href="#">Sign in</a>
                <a href="#">FAQs</a>
            </div>
            <div class="offcanvas__top__hover">
                <span>riel <i class="arrow_carrot-down"></i></span>
                <ul>
                    <li>USD</li>
                    <li>RIEL</li>
                    <li>euro</li>
                </ul>
            </div>
        </div>
        <div class="offcanvas__nav__option">
            <a href="#" class="search-switch"><img src="img/icon/search.png" alt=""/></a>
            <a href="#"><img src="img/icon/heart.png" alt=""/></a>
            <a href="#"><img src="img/icon/cart.png" alt=""/> <span>0</span></a>
            <div class="price">$0.00</div>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div class="offcanvas__text">
            <p>Let's Go to shipping now for return or refund guarantee.</p>
        </div>
    </div>
    {/* <!-- Offcanvas Menu End --> */}
    </div>
  )
}

export default Menu