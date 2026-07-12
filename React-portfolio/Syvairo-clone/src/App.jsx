import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'


import './App.css'

import ServiceCards from './Components/Servicecards'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Media from './Pages/Media'

function App() {
  const [showlinks, setshowlinks] = useState(false)

  return (
    <>

  


    <BrowserRouter>
         
         <Navbar showlinks={showlinks} setshowlinks={setshowlinks}/>
      <Routes>

<Route path="/" element={<Home showlinks={showlinks} setshowlinks={setshowlinks}/>} />
<Route path="/Service" element={<Services/>} />
<Route path="/media" element={<Media/>} />

   
      


      </Routes>
 <Footer/>
         </BrowserRouter>
    </>
  )
}

export default App
