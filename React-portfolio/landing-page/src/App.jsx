import { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faTailwindCss, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import {faJs} from '@fortawesome/free-brands-svg-icons'
import {faCss} from '@fortawesome/free-brands-svg-icons'
// import {faTailwindCss} from '@fortawesome/free-brands-svg-icons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Nav bar Started ----------------------------------------  */}
    <div className=" overflow-hidden nav-bar w-full py-4 bg-gradient-to-r from-[#122341] to-[#211d34] flex flex-col items-center gap-2 md:flex-row md:justify-evenly ">

<div className="logo  min-w-max">
  <h1 className='bg-gradient-to-r from-[#3b7fc9] to-[#781f34] bg-clip-text text-transparent text-xs md:text-3xl inline-block uppercase font-bold'>Front end Developer</h1>
</div>

<div className="ui-links">
  <ul className='flex justify-evenly gap-4  items-center text-white'>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Service</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>

{/* Hire Me Button  */}
<button className='bg-gradient-to-r from-[#233d6e] to-[#5d263b] px-4 py-2 font-semibold rounded-full text-white'><a href="#">Hire Me</a></button>

    </div>


    {/* Hero Section  */}

    <section id='hero-section' className='hero-section bg-[#101a33] h-[80vh]'>
<div className="hero-s h-full flex flex-col items-center  gap-4 px-2 md:flex-row md:justify-between  w-[80%] mx-auto">

<div className='hero-content flex flex-col items-center md:min-w-1/2  md:items-start' >
    <div className="title flex flex-col items-center md:items-start">
    <h1 className='text-white md:text-4xl md:font-bold my-2'>HI, i'm</h1>
    <span className='bg-gradient-to-r from-[#3089ea] to-[#f03f41] text-transparent bg-clip-text md:text-4xl md:font-bold md:tracking-wider'>M Abdullah</span>
  </div>

  <div className="hero-content text-center my-4 md:w-[50%] md:text-left">
    <p className='text-white tracking-wide '>i build websites front-end using React, Tailwind Css, and HTML, i love clean code and fast Uis</p>
  </div>

  {/* Hero Buttons  */}
  <div className="hero-btns flex gap-2 mt-4 md:mb-4">
    <button className=' w-30 bg-gradient-to-r from-[#3089ea] to-[#f03f41] text-white rounded-full px-4 py-2 font-semibold md:w-40'>View Projects</button>
    <button className='border-2 border-blue-500 text-white rounded-full px-4 py-2 font-semibold'>Let's Collaborate</button>
  </div>
</div>

{/* Hero Image  */}
<div className="relative flex justify-center items-center">

  {/* Sun Glow */}
  <div className="absolute w-80 h-80 rounded-full
    bg-radial  from-[#3f2b96]
  via-[#2f223c]
  to-transparent
  blur-3xl">
  </div>

  {/* Image */}
  <img
    src="/src/abdullah.png"
    alt=""
    className="relative z-10 w-64 h-64 rounded-full object-cover bg-[#030408]"
  />

  {/* React Icon */}
  <FontAwesomeIcon
    icon={faReact}
    className="absolute top-3 left-0 md:-top-8 md:-left-0 z-20 bg-[#14325b] text-[#3687da] rounded-full p-2 md:text-4xl"
  />

  {/* Js Icon  */}
  <FontAwesomeIcon icon={faJs} className='absolute top-2 right-0 md:-top-5 md:-right-3 bg-[#14325b] text-[#3687da] rounded-full p-2 md:text-4xl' />

  {/* Css Icons  */}
  <FontAwesomeIcon icon={faCss} className=' absolute top-29 -left-10 md:top-22 md:-left-17 bg-[#14325b] text-[#3687da] rounded-full p-2 md:text-4xl' />

  {/* Tailwind Css  */}
<FontAwesomeIcon icon={faTailwindCss} className=' absolute top-29 -right-10 md:top-22 md:-right-17 bg-[#14325b] text-[#3687da] rounded-full p-2 md:text-4xl' />

{/* HTml  */}
<FontAwesomeIcon icon={faHtml5} className=' absolute -bottom-10 left-29 md:-bottom-15 md:left-25 bg-[#14325b] text-[#3687da] rounded-full p-2 md:text-4xl' />
</div>
</div>
    </section>
    </>
  )
}

export default App
