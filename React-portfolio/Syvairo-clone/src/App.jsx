import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

import './App.css'

function App() {
  const [showlinks, setshowlinks] = useState(false)

  return (
    <>
         
         {/* Navbar  */}
         <Navbar showlinks={showlinks} setshowlinks={setshowlinks}/>
         <Hero/>
    </>
  )
}

export default App
