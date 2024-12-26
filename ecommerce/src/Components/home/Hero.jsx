import React, { useEffect } from 'react'
import Hero1 from '../img/hero/hero-1.jpg'
import Hero2 from '../img/hero/hero-2.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    };

  return (
    <div>
    {/* <!-- Hero Section Begin --> */}
    <section class="hero">
        <Slider className="hero__slider">
            <div>
            <div class="hero__items " style={{ backgroundImage: `url(${Hero1})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-7 col-md-8">
                            
                                <h6>Summer Collection</h6>
                                <h2>Fall - Winter Collections 2030</h2>
                                <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality.</p>
                                <a href="#" class="primary-btn">Shop now <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div>
            <div class="hero__items " style={{ backgroundImage: `url(${Hero2})`, height: '500px', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-7 col-md-8">
                            <h6>Summer Collection</h6>
                            <h2>Fall - Winter Collections 2030</h2>
                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                            commitment to exceptional quality.</p>
                            <a href="#" class="primary-btn">Shop now <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Slider>
    </section>
    {/* <!-- Hero Section End --> */}
    </div>
  )
}

export default Hero