import React from 'react'
import BusinessSolution from '../Components/ServiceCards'
import Cards from '../Components/Cards'
// import Footer from '../Components/Footer'
import ServiceCards from '../Components/Servicecards'
// import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Services from '../Components/Services'

const Home = ({setshowlinks, showlinks}) => {
  return (
    <div>
           {/* <Navbar /> */}
         <Hero/>
         <Services/>
       
         <Cards/>
         {/* <ServiceCards/> */}
           {/* <BusinessSolution/> */}
         {/* <Footer/> */}
         
    </div>
  )
}

export default Home
