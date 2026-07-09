import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

import './App.css'
import BusinessSolution from './Components/BusinessSolution'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

function App() {
  const [showlinks, setshowlinks] = useState(false)

  return (
    <>
         
         {/* Navbar  */}
         <Navbar showlinks={showlinks} setshowlinks={setshowlinks}/>
         <Hero/>
         <BusinessSolution/>
         <Cards/>
         <Footer/>
    </>
  )
}

export default App
