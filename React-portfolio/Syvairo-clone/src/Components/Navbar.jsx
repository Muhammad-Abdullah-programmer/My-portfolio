
import logo from '../assets/Images/logo.png'

import {IoMdMenu} from '../assets/Icons.jsx'
import { Link } from 'react-router-dom'








export default function Navbar({showlinks,setshowlinks}){


const showmenue = ()=>{

    setshowlinks(!showlinks)
}

return(

    <>

    <div className='flex justify-center items-center w-[100%] mx-auto py-4  bg-linear-to-tr from-[#110f35] via-[#000002] to-[#220141] '>
    <div className="logo w-[50%] md:w-[10%]  bg-[#250843cc] rounded-full   group md:hover:w-[60%] transition-all ease-in-out duration-300 flex justify-center items-center">
        <img src={logo} alt="" className=' w-24 text-4xl  ' />
        <IoMdMenu  className=" md:hidden block  text-white ml-4 relative " onClick={showmenue} />
      
    <nav className=' w-[0%] py-4 hidden md:group-hover:w-[70%] md:group-hover:block transition-all ease-in-out duration-300 '>
        
        {/* Links  */}
        
            <ul className='flex justify-end text-white font-bold gap-4 '>
               <Link to="/"><li>Home</li></Link>
               <Link to="/Service"> <li>Services</li></Link>
                <li>Demos</li>
                <Link to="/media">  <li>Media</li> </Link>
               
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        
       
       
    </nav>

 {/* Mobile Links  */}
     <ul className={` ${ showlinks ? "flex flex-col" : "hidden "} rounded-2xl  absolute top-10 min-w-[40%] text-center right-25 text-white font-bold gap-4 md:hidden   bg-[#250843cc] p-5  `}>
                <li>Home</li>
                <li>Services</li>
                <li>Demos</li>
                <li>Media</li>
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
   
     </div>
    </div>
    </>


)

}