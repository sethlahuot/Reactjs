import React from 'react'
import Menu from '../Components/home/Menu'
import Header from '../Components/home/Header'
import Hero from '../Components/home/Hero'
import Banner from '../Components/home/Banner'
import Product from '../Components/home/Product'
import Footer from '../Components/Home/Footer'
import Search from '../Components/Home/Search'
import Categories from '../Components/home/Categories'


const Home = () => {
  return (
    <div>

        <Menu/>
        <Header/>
        <Hero/>
        <Banner/>
        <Product/>
        <Categories/>
        <Footer/>
        <Search/>
        
    </div>
  )
}

export default Home;