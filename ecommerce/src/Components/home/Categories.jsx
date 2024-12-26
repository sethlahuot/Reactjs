import React, {useEffect, useState} from 'react'
import {Link } from 'react-router-dom';


const Categories = () => {
    const [product, setProduct] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/1');
                const data = await response.json();
                setProduct(data);
            } catch (e) {console.log(e);}
        };

        fetchProduct();
    }, []);
  return (
    <div>
          {/* <!-- Categories Section Begin --> */}
          <section className="categories spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="categories__text">
                              <h2>{'Clothings Hot'} <br /> <span>{'Bag Collection'}</span> <br />{ 'Accessories'} </h2>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="categories__hot__deal">
                              <img src={product.image} alt="" style={{width:'auto', height:'400px'}}/>
                              <div className="hot__deal__sticker">
                                  <span>{'Sale Of'}</span>
                                  <h5>$19.99</h5>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 offset-lg-1">
                          <div className="categories__deal__countdown">
                              <span>{'Deal Of The Week'}</span>
                              <h4 style={{margin:'15px 0'}}>{product.title}</h4>
                              <div className="categories__deal__countdown__timer" id="countdown">
                                  <div className="cd-item">
                                      <span>{'3'}</span>
                                      <p>{ 'Days'}</p>
                                  </div>
                                  <div className="cd-item">
                                      <span>{ '1'}</span>
                                      <p>{ 'Hours'}</p>
                                  </div>
                                  <div className="cd-item">
                                      <span>{ '50'}</span>
                                      <p>{ 'Minutes'}</p>
                                  </div>
                                  <div className="cd-item">
                                      <span>{ '18'}</span>
                                      <p>{'Seconds'}</p>
                                  </div>
                              </div>
                              <Link to={`/shop`} className="primary-btn">{ 'Shop now'}</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Categories Section End --> */}
    </div>
  )
}

export default Categories