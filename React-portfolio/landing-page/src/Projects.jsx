import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloud, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Weather from './assets/Weather.webp'




export default function Projects(){



    return(

        <>
        
        <section id="projects" className="w-full h-[100vh] py-2 bg-[#101a33] overflow-hidden">
<div className="projects w-[80%] h-full mx-auto">
{ <div className="projects-heading my-2 h-[5%] md:h-[15%] md:flex md:flex-col md:justify-evenly">
    <h2 className="text-white text-sm font-bold tracking-wider text-center">Recent Projects</h2>
<p className="text-white/70 text-center tracking-wide hidden md:block">Here are some of the real-world projects i've built using HTML, Tailwind, And JS</p>

</div>}
{/* Projects Cart  */}
<div className="w-full h-[90%] cards grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4  overflow-hidden">

    {/* Weather Card  */}
    <div className="flex flex-col  weather-card col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] overflow-hidden">
       <div className='rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-4 h-[100%]'>
       {/* Card Logo  */}
       <div className="card-logo w-[90%] flex justify-center ">
         <img src={Weather} alt="" className='md:w-30 w-10 h-10 md:h-30' />
         
       </div>

       {/* Card Text  */}
       <div className="card-text flex flex-col gap-2 text-center">
<h2 className='text-white md:text-4xl md:font-bold md:tracking-wider'>Weather App 2025</h2>
<p className='text-white/70 md:tracking-wide'>A fully working weather app web application where u can check current weather of any city</p>
       </div>

       {/* Card Buttons  */}
       <div className="card-buttons ">

        {/* Tech Stack Buttons  */}
        <div className="tect-btns flex justify-evenly gap-2 mt-8">
            <p className='bg-[#12294b] text-white text-md font-semibold   flex justify-center items-center px-4 rounded-2xl text-center'>HTML</p>
            <p className='bg-[#12294b] text-white   text-md font-semibold   flex justify-center items-center px-4 rounded-2xl text-center'>Tailwind CSS</p>
            <p className='bg-[#12294b] text-white  text-md font-semibold   flex justify-center items-center px-4 rounded-2xl text-center'>Java Script</p>
        </div>

        {/* Live Demo Btns  */}
        <div className="live-demo-btns flex gap-2 mt-8">
            <a href="#" className='bg-gradient-to-r from-[#1a91fb] to-[#e64150] text-white rounded-full px-4 py-1 font-semibold'>Github <FontAwesomeIcon icon={faAngleRight} /></a>
            <a href="#" className='bg-gradient-to-r from-[#1a91fb] to-[#e64150] text-white rounded-full px-4 py-1 font-semibold'>Live Demo <FontAwesomeIcon icon={faAngleRight} /> </a>
        </div>

       </div>

    </div>
    </div>

    {/* E-Commerece Card  */}
     <div className="weather-card col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] overflow-hidden">
       <div className='rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-4 h-[100%]  flex flex-col items-center p-4'>
       {/* Card Logo  */}
       <div className="card-logo w-[90%] flex justify-center ">
         <img src={Weather} alt="" className='md:w-30 w-10 h-10 md:h-30' />
         
       </div>

       {/* Card Text  */}
       <div className="card-text flex flex-col gap-2">
<h2 className='text-white text-center md:text-4xl md:font-bold md:tracking-wider'>Weather App 2025</h2>
<p className='text-white/70 text-center md:tracking-wide'>A fully working weather app web application where u can check current weather of any city</p>
       </div>

       {/* Card Buttons  */}
       <div className="card-buttons ">

        {/* Tech Stack Buttons  */}
        <div className="tect-btns flex justify-evenly gap-2 mt-8">
            <p className='bg-[#12294b] text-white text-md font-semibold   flex justify-center items-center px-4 rounded-2xl text-center'>HTML</p>
            <p className='bg-[#12294b] text-white   text-md font-semibold   flex justify-center items-center px-4 rounded-2xl text-center'>Tailwind CSS</p>
            <p className='bg-[#12294b] text-white  text-md font-semibold   flex justify-center items-center px-4 rounded-2xl text-center'>Java Script</p>
        </div>

        {/* Live Demo Btns  */}
        <div className="live-demo-btns flex gap-2 mt-8">
            <a href="#" className='bg-gradient-to-r from-[#1a91fb] to-[#e64150] text-white rounded-full px-4 py-1 font-semibold'>Github <FontAwesomeIcon icon={faAngleRight} /></a>
            <a href="#" className='bg-gradient-to-r from-[#1a91fb] to-[#e64150] text-white rounded-full px-4 py-1 font-semibold'>Live Demo <FontAwesomeIcon icon={faAngleRight} /> </a>
        </div>

       </div>

    </div>
    </div>
</div>
</div>

        </section>
        </>
    )
}