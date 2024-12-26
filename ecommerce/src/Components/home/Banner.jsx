
import React, {useEffect, useState} from 'react'

const Banner=()=> {
    const [images, setImages] = useState([]);
    const fetchProductsByIds = async (ids) => {
        try {
            const urls = ids.map((id) => `https://fakestoreapi.com/products/${id}`);
            const productPromises = urls.map((url) =>
                fetch(url).then((response) => response.json())
            );
            const products = await Promise.all(productPromises);

            const productImages = products.map((product) => product.image);
            setImages(productImages);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {
        fetchProductsByIds([2,3,20]);
    }, []);
  return (
    <div>
        {/* <!-- Banner Section Begin -->https://fakestoreapi.com/carts https://fakestoreapi.com/products*/}
        <section class="banner spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 offset-lg-4">
                    <div class="banner__item">
                        <div class="banner__item__pic">
                            <img src={images [0]} alt="" style={{height:'auto', width:'280px'}}/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Clothing Collections 2025</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="banner__item banner__item--middle">
                        <div class="banner__item__pic">
                        <img src={images [1]} alt="" style={{height:'auto', width:'280px'}}/>
                        </div>
                        <div class="banner__item__text">
                            <h2>Jacket From 2025</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="banner__item banner__item--last">
                        <div class="banner__item__pic">
                        <img src={images [2]} alt="" style={{height:'auto', width:'280px'}}/>
                        </div>
                        <div class="banner__item__text">
                            <h2>New Fashion From 2025</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Banner Section End --> */}    
    
    </div>
  )
}

export default Banner