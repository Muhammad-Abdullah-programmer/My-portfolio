import {FaFacebook,FaTwitter,FaLinkedin, FaWhatsappSquare} from '../assets/Icons'

import logo from '../assets/Images/logo.png'




export default function Footer(){

    return(
    
    
    <>
    <section className="bg-black">
        <footer className='  flex justify-around items-center py-4  gap-8 md:gap-0 pl-4 md:flex-col justify-between '>
<div className="footer md:flex md:justify-between border-b border-gray-400 pb-8  md:w-[95%]">
    {/* First child  */}
<div className="first flex flex-col gap-4 md:max-w-[25%]">
    <img src={logo} alt="" className='w-35' />
    <p className='text-gray-300 text-xs w-[80%]'>End-to-end AI agents & automation systems built to operate, scale, and deliver measurable business outcomes.</p>

    <div className="links flex text-white gap-3">
        <a href="https://www.facebook.com/muhammad.abdullah.643229"><FaFacebook/></a>
        <a href="#"><FaTwitter/></a>
        <a href="https://www.linkedin.com/in/mabdullahdeveloper/"><FaLinkedin/></a>
    </div>
</div>

{/* Second Child  */}
<div className="second-child flex flex-col gap-1 text-gray-300 text-xs">

<p className='text-sm font-bold my-2'>Quick Links</p>
<a href="">Home</a>
<a href="">Services</a>
<a href="">Media</a>
<a href="">About</a>
<a href="">Carrers</a>
<a href="">Contact</a>

</div>

{/* Third  */}
<div className="second-child flex flex-col gap-1 text-gray-300 text-xs">

<p className='text-sm font-bold my-2'>Legal</p>
<a href="">Privacy Policy</a>
<a href="">Terms of Services</a>
<a href="">Cookie policy</a>
<a href="">FAQS</a>


</div>

{/* Contact  */}
<div className="second-child flex flex-col gap-1 text-gray-300 text-xs">

<p className='text-sm font-bold my-2'>Contact</p>
<span>business.mabdullah@gmail.com</span>
<span className='flex items-center gap-2'><FaWhatsappSquare className='text-green-400'/>+923088389163</span>


</div>
</div>

<div className="copyright-tex flex justify-between text-gray-300 text-sm hidden md:flex mt-6  w-[70%]">
    <span>© 2026 All Rights Reserved.</span>
    <span>Developed by M.Abdullah</span>
</div>
        </footer>
    </section>
    
    </>

)
}