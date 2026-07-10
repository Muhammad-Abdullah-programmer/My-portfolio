import React from 'react'
import BusinessSolution from '../Components/BusinessSolution'
import Cards from '../Components/Cards'
// import Footer from '../Components/Footer'
import ServiceCards from '../Components/Servicecards'
// import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'

const Home = ({setshowlinks, showlinks}) => {
  return (
    <div>
           {/* <Navbar /> */}
         <Hero/>
         <BusinessSolution/>
         <Cards/>
         {/* <Footer/> */}
         <ServiceCards/>
    </div>
  )
}

export default Home
