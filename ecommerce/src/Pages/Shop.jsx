import React from 'react';
import Menu from '../Components/home/Menu';
import Header from '../Components/home/Header'
import ShopBreadcrumb from '../Components/Shop/ShopBreadcrumb'
import ShopSection from '../Components/Shop/ShopSection'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'

const Shop = () => {
  return (
    <div>
        <Menu/>
        <Header/>
        <ShopBreadcrumb/>
        <ShopSection/>
        <Footer/>
        <Search/>
    </div>
  )
}

export default Shop
