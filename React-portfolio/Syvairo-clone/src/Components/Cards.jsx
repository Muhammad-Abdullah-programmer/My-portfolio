
import {IoMdBusiness,BsFillLightningChargeFill} from '../assets/Icons'


export default function Cards(){


    return(

        <>
        <section className='bg-gradient-to-tr from-[#110f35] via-[#000002] to-[#220141] py-4'>
              <div className='border-2 border-cyan-700 rounded-full md:max-w-[18%] max-w-[80%] mx-auto bg-cyan-500/20'>
                    <span className="text-[#22d3ee] flex justify-center items-center gap-2 "> <IoMdBusiness className='text-white' /> Business Solution</span>
                </div>
                <h2 className='bg-linear-to-r from-[#00ced1] to-[#00ced1] bg-clip-text text-transparent text-shadow-2xs my-4 [text-shadow:0_0_38px_rgba(0,206,209,0.35),0_0_20px_rgba(0,206,209,0.2)] text-center transform-none text-3xl md:text-4xl  font-semibold'>Why Businesses Choose Syvairo</h2>


                {/* Cards  */}
                <div className="cards grid grid-cols-3 grid-rows-2">

                    <div className="card-1 col-span-1 ">
                        <div className=' flex justify-center items-center w-12 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 '><BsFillLightningChargeFill/></div>
                    </div>

                </div>
        </section>
        </>
    )
}