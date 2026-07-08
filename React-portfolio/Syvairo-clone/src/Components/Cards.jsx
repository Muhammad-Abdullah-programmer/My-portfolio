
import { FaClock } from 'react-icons/fa6'
import {IoMdBusiness,BsFillLightningChargeFill,CiClock1,IoSettings,IoMdResize,LuCombine,FaRocket} from '../assets/Icons'


export default function Cards(){


    return(

        <>
        <section className='bg-gradient-to-tr from-[#110f35] via-[#000002] to-[#220141] py-4'>
              <div className='border-2 border-cyan-700 rounded-full md:max-w-[18%] max-w-[80%] mx-auto bg-cyan-500/20'>
                    <span className="text-[#22d3ee] flex justify-center items-center gap-2 "> <IoMdBusiness className='text-white' /> Business Solution</span>
                </div>
                <h2 className='bg-linear-to-r from-[#00ced1] to-[#00ced1] bg-clip-text text-transparent text-shadow-2xs my-4 [text-shadow:0_0_38px_rgba(0,206,209,0.35),0_0_20px_rgba(0,206,209,0.2)] text-center transform-none text-3xl md:text-4xl  font-semibold'>Why Businesses Choose Syvairo</h2>


                {/* Cards  */}
                <div className="cards grid grid-cols-3 grid-rows-2 max-w-[80%] mx-auto gap-7 mt-8 ">

                  {/* Card 1 */}
                    <div className="card-1 min-w-[70%] max-h-[100%] px-2 col-span-1 flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
                        <div className=' flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 '>
                        <BsFillLightningChargeFill className='text-cyan-400 font-extrabold text-2xl'/>
                        </div>
                   
                   <div className="text flex flex-col  gap-2">
                     <h2 className='text-white text-md font-semibold'>No missed leades-24/7 </h2>
                    <p className='text-white text-sm'>Follow-ups & replay anytime </p>
                   </div>

                    </div>


                    {/* Card 2  */}
                      <div className="card-1 min-w-[70%] max-h-[100%] px-2 col-span-1 flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
                        <div className=' flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 '>
                        <FaClock className='text-cyan-400 font-extrabold text-2xl'/>
                        </div>
                   
                   <div className="text flex flex-col  gap-2">
                     <h2 className='text-white text-md font-semibold'>No missed leades-24/7 </h2>
                    <p className='text-white text-sm'>Follow-ups & replay anytime </p>
                   </div>

                    </div>

                    {/* Card 3  */}
                       <div className="card-1 min-w-[70%] max-h-[100%] px-2 col-span-1 flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
                        <div className=' flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 '>
                        <FaRocket className='text-cyan-400 font-extrabold text-2xl'/>
                        </div>
                   
                   <div className="text flex flex-col  gap-2">
                     <h2 className='text-white text-md font-semibold'>45+ Automation Agents Ready </h2>
                    <p className='text-white text-sm'>Launch in days not month </p>
                   </div>

                    </div>

                    {/* card 4  */}
                    <div className="card-1 min-w-[70%] max-h-[100%] px-2 col-span-1 flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
                        <div className=' flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 '>
                        <LuCombine className='text-cyan-400 font-extrabold text-2xl'/>
                        </div>
                   
                   <div className="text flex flex-col  gap-2">
                     <h2 className='text-white text-md font-semibold'>Integrate with any Software </h2>
                    <p className='text-white text-sm'>API, CRM, ERP, Whatsapp </p>
                   </div>

                    </div>


                    {/* Card 5  */}
                      <div className="card-1 min-w-[70%] max-h-[100%] px-2 col-span-1 flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
                        <div className=' flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 '>
                        <IoMdResize className='text-cyan-400 font-extrabold text-2xl'/>
                        </div>
                   
                   <div className="text flex flex-col  gap-2">
                     <h2 className='text-white text-md font-semibold'>Custom Ai & RPA solutions </h2>
                    <p className='text-white text-sm'>Task completed end-to-end automatically </p>
                   </div>

                    </div>

                    {/* Card 6  */}
                     <div className="card-1 min-w-[70%] max-h-[100%] py-6 px-2 col-span-1 flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
                        <div className=' flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 '>
                        <IoSettings className='text-cyan-400 font-extrabold text-2xl'/>
                        </div>
                   
                   <div className="text flex flex-col  gap-2">
                     <h2 className='text-white text-md font-semibold'>Custom Ai & RPA solutions </h2>
                    <p className='text-white text-sm'>Task completed end-to-end automatically </p>
                   </div>

                    </div>

                </div>
        </section>
        </>
    )
}