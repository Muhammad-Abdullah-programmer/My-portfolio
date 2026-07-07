
import {FaArrowRight} from '../assets/Icons'

export default function Hero(){


    return(

        <>
        <div className="hero flex flex-col items-center justify-center py-4 mx-auto max-w-[100%]  bg-linear-to-tr from-[#110f35] via-[#000002] to-[#220141] ">

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#00ced1] text-center max-w-[80%] ">Move from AI Tools to AI Results</h1>
            <p className=" md:max-w-2xl mx-auto text-center my-6 tracking-wide text-white max-w-[85%]">Syvairo deploys custom-built AI agents that run your business processes autonomously. Complete solutions, zero complexity.</p>

            <div className="border border-cyan-700 bg-cyan-500/10 text-shadow: rgba(0, 206, 209, 0.45) 0px 0px 38px, rgba(0, 206, 209, 0.25) 0px 0px 20px; rounded-full p-2 font-semibold">
                <span className="text-cyan-400 font-semibold text-sm ">The Story Behind SYVAIRO - Watch Now</span>
            </div>

            {/* Vido  */}

<div className='border-8 border-cyan-950 rounded-3xl p-5 coursor-pointer backdrop-blur-xl my-6'>
    <video
  autoPlay
  loop
  muted
  playsInline
  className="w-70 h-auto"
>
  <source src="/videoplayback.mp4" type="video/mp4" />

  vido
</video>
</div>

{/* Button  */}
        
        <a href="" className='my-6     '><button className='flex justify-between gap-2 hover:scale-105 items-center px-8 py-4 rounded-full bg-cyan-600 border-2 border-cyan-500 font-bold text-white hover:shadow-[0_0_2px_#00CED1,0_0_10px_#00CED1] text-lg transition-all duration-300'>Discover Your Benifits <FaArrowRight/></button>
</a>
        
        </div>
        
        </>
    )
}