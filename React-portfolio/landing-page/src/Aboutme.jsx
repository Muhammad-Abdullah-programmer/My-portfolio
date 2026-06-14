import './index.css'
import abdullahImg from './abdullah.png'

export default function Aboutme(){


    return(

        <>
        <section id="aboutMe" className="aboutme w-full h-[80vh] bg-gradient-to-r from-[#112546] to-[#291c36]">
<div className="aboutme w-[80%] h-full mx-auto flex flex-col items-center md:items-center md:justify-between ">
    {/* About Me Picture Div  */}
    <div className="picture-about-me w-1/2">
        <div className="black-effect bg-black rounded-full overflow-hidden flex justify-center items-center max-w-[80%]">

    <img src={abdullahImg} className='object-contain' alt="" />
    </div>
    </div>

    {/* About Me Text  */}
    <div className="about-me-text w-1/2 text-[#ffff]  h-full flex flex-col gap-4">
    <h2 className='font-bold text-3xl my-4'>About Me</h2>
        <p className='tracking-wider'>i am a Front-end Web Developer focusing on building production-ready applications enjoy designing creating interactive user interfaces, and optimizing performance deliver smooth and efficient user experiences.

Along with strong problem solving skill, i follow clean architecture principles and modern development patterns. Im passionate about writing maintainable code, improving UI/UX and building application that feel fast, secure, and intuitive, i actively explore new tools in the MERN ecosystem to stay updated and keep improving my development workflow.</p>

{/* Button  */}
<a href='' className='bg-gradient-to-r from-[#3088ec] to-[#f0413f] w-40 px-3 py-2 rounded-2xl font-semibold'>Download Resume </a>
    </div>
</div>
        </section>
        
        
        </>
    )
}