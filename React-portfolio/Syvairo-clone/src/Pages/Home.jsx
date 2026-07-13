import React from 'react'
import Cards from '../Components/Cards'

import Hero from '../Components/Hero'
import BusinessSolution from '../Components/BusinessSolution'

const Home = ({setshowlinks, showlinks}) => {
  return (
    <div>
           {/* <Navbar /> */}
         <Hero/>
         <BusinessSolution/>
       
         <Cards/>
         {/* <ServiceCards/> */}
           {/* <BusinessSolution/> */}
         {/* <Footer/> */}
         
    </div>
  )
}

export default Home
