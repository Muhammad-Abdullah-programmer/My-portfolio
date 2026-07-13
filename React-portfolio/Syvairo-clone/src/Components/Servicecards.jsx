import { FaClock } from "react-icons/fa6";
import {
  IoMdBusiness,
  BsFillLightningChargeFill,
  CiClock1,
  IoSettings,
  IoMdResize,
  LuCombine,
  FaRocket,
  FaPhoneAlt,
  FaCheck,
  SlCalender,
  PiBrain,
  FaWhatsapp,
  FaArrowTrendUp
} from "../assets/Icons";
import Process from "./Process";

export default function ServiceCards(){

    return(
        <>
        
          <section className=" bg-black py-6 ">

            <div className='border-2 border-cyan-700 rounded-full md:max-w-[15%] max-w-[65%]  mx-auto  bg-cyan-500/20'>
        <span className="text-[#22d3ee] flex justify-center items-center gap-2 py-2 font-bold "> <FaArrowTrendUp className='text-white' /> High ROI Automation</span>
    </div>

    <h2 className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent text-3xl md:text-5xl font-bold text-center my-6">Top High-ROI AI Agents</h2>
    <p className="text-center text-white font-semibold tracking-wide">Proven agents delivering immediate business impact.</p>
            
           <div className="cards-parent bg-black  py-4 md:py-8 md:px-8 flex justify-evenly px-2  gap-8 overflow-x-auto mx-auto md:max-w-[90%] md:overflow-x-hidden md:grid md:grid-cols-3 md:grid-rows-2  ">
        
                    {/* Card 1 */}
                    <div className="card-1 flex flex-col justify-around md:min-h-[40vh]    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-evenly hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%]  md:col-span-1 md:hover:-translate-y-2 ">
        
        
                      <div className="icons flex justify-between  w-[100%]">
        
        
                     <div className="phone bg-cyan-700 text-white text-xl font-bold group-hover:bg-white/20 w-15 h-15 flex justify-center items-center rounded-xl ">
                      <PiBrain/>
                     </div>
        
                   
        
                    </div>
        
                    {/* Text  */}
                    <div className="text flex flex-col  ">
                      <h3 className="text-white text-xl font-semibold ">Operational Intelligence Agent</h3>
                      <span className="text-sm tracking-wide mt-4 text-gray-500 ">Autonomus analysis to pinpoint bottlenecks and uncover high-impact automation apportunities instantly.</span>
        
                    </div>
        
                    {/* Uls  */}
                    <div className="uls pl-4 ">
                      <ul className="text-white text-sm list-disc marker:text-cyan-600 ">
                        <li className=" gap-4"> 60% calls without human intervention</li>
                        <li className=" gap-4"> 30% increase in leade captured </li>
                        <li className=" gap-4"> Staff focused on high-value task</li>
                      </ul>
                    </div>
                    </div>
        
                    {/* Card 2  */}
                      <div className="card-1    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] md:hover:-translate-y-2 
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-around md:min-h-[40vh] hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%]  md:col-span-1 ">
        
        
                      <div className="icons flex justify-between  w-[100%]">
        
        
                     <div className="phone bg-cyan-700 text-white text-xl font-bold group-hover:bg-white/20 w-15 h-15 flex justify-center my-4 items-center rounded-xl ">
                      <FaWhatsapp/>
                     </div>
        
                   
        
                    </div>
        
                    {/* Text  */}
                    <div className="text flex flex-col  ">
                      <h3 className="text-white text-xl font-semibold ">Whatsapp all Receptionist</h3>
                      <span className="text-sm tracking-wide my-4 text-gray-500 ">Handle customer queries, booking and follow-ups, 24/7 </span>
        
                    </div>
        
                    {/* Uls  */}
                    <div className="uls pl-4 ">
                      <ul className="text-white text-sm list-disc marker:text-cyan-600 ">
                        <li className=" gap-4"> Instent replies</li>
                        <li className=" gap-4"> Appointment booking </li>
                        <li className=" gap-4"> CRM syncronization</li>
                        <li className=" gap-4"> Lead capture automation</li>
                      </ul>
                    </div>
                    </div>
        
                    {/* Card 3  */}
                       <div className="card-1    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-around md:min-h-[40vh] hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%] md:hover:-translate-y-2  md:col-span-1 ">
        
        
                      <div className="icons flex justify-between  w-[100%]">
        
        
                     <div className="phone bg-cyan-700 text-white text-xl my-4 font-bold group-hover:bg-white/20 w-15 h-15 flex justify-center items-center rounded-xl ">
                      <FaArrowTrendUp/>
                     </div>
        
                   
        
                    </div>
        
                    {/* Text  */}
                    <div className="text flex flex-col  ">
                      <h3 className="text-white text-xl font-semibold ">Lead Qualification Agent</h3>
                      <span className="text-sm tracking-wide my-4 text-gray-500 ">Automatically scores and qualifies leads in real-time </span>
        
                    </div>
        
                    {/* Uls  */}
                    <div className="uls pl-4 ">
                      <ul className="text-white text-sm list-disc marker:text-cyan-600 ">
                        <li className=" gap-4"> Smart lead scoring</li>
                        <li className=" gap-4"> Auto follow-up </li>
                        <li className=" gap-4"> Pipeline optmization</li>
                        <li className=" gap-4"> Higher conversion</li>
                      </ul>
                    </div>
                    </div>

                    {/* Card 4  */}
                     
                    <div className="card-1 flex flex-col justify-around md:min-h-[40vh]    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-evenly hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%]  md:col-span-1 md:hover:-translate-y-2 ">
        
        
                      <div className="icons flex justify-between  w-[100%]">
        
        
                     <div className="phone bg-cyan-700 text-white text-xl font-bold group-hover:bg-white/20 w-15 h-15 flex justify-center items-center rounded-xl ">
                      <PiBrain/>
                     </div>
        
                   
        
                    </div>
        
                    {/* Text  */}
                    <div className="text flex flex-col  ">
                      <h3 className="text-white text-xl font-semibold ">Operational Intelligence Agent</h3>
                      <span className="text-sm tracking-wide mt-4 text-gray-500 ">Autonomus analysis to pinpoint bottlenecks and uncover high-impact automation apportunities instantly.</span>
        
                    </div>
        
                    {/* Uls  */}
                    <div className="uls pl-4 ">
                      <ul className="text-white text-sm list-disc marker:text-cyan-600 ">
                        <li className=" gap-4"> 60% calls without human intervention</li>
                        <li className=" gap-4"> 30% increase in leade captured </li>
                        <li className=" gap-4"> Staff focused on high-value task</li>
                      </ul>
                    </div>
                    </div>
        
                    {/* Card 5  */}
                      <div className="card-1    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] md:hover:-translate-y-2 
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-around md:min-h-[40vh] hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%]  md:col-span-1 ">
        
        
                      <div className="icons flex justify-between  w-[100%]">
        
        
                     <div className="phone bg-cyan-700 text-white text-xl font-bold group-hover:bg-white/20 w-15 h-15 flex justify-center my-4 items-center rounded-xl ">
                      <FaWhatsapp/>
                     </div>
        
                   
        
                    </div>
        
                    {/* Text  */}
                    <div className="text flex flex-col  ">
                      <h3 className="text-white text-xl font-semibold ">Whatsapp all Receptionist</h3>
                      <span className="text-sm tracking-wide my-4 text-gray-500 ">Handle customer queries, booking and follow-ups, 24/7 </span>
        
                    </div>
        
                    {/* Uls  */}
                    <div className="uls pl-4 ">
                      <ul className="text-white text-sm list-disc marker:text-cyan-600 ">
                        <li className=" gap-4"> Instent replies</li>
                        <li className=" gap-4"> Appointment booking </li>
                        <li className=" gap-4"> CRM syncronization</li>
                        <li className=" gap-4"> Lead capture automation</li>
                      </ul>
                    </div>
                    </div>

                    {/* 6  */}
                      <div className="card-1    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] md:col-span-1
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-around md:min-h-[40vh] hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%]  md:col-span-1 ">
        
        
                      <div className="icons flex justify-between  w-[100%]">
        
        
                     <div className="phone bg-cyan-700 text-white text-xl font-bold group-hover:bg-white/20 w-15 h-15 flex justify-center my-4 items-center rounded-xl ">
                      <FaWhatsapp/>
                     </div>
        
                   
        
                    </div>
        
                    {/* Text  */}
                    <div className="text flex flex-col  ">
                      <h3 className="text-white text-xl font-semibold ">Whatsapp all Receptionist</h3>
                      <span className="text-sm tracking-wide my-4 text-gray-500 ">Handle customer queries, booking and follow-ups, 24/7 </span>
        
                    </div>
        
                    {/* Uls  */}
                    <div className="uls pl-4 ">
                      <ul className="text-white text-sm list-disc marker:text-cyan-600 ">
                        <li className=" gap-4"> Instent replies</li>
                        <li className=" gap-4"> Appointment booking </li>
                        <li className=" gap-4"> CRM syncronization</li>
                        <li className=" gap-4"> Lead capture automation</li>
                      </ul>
                    </div>
                    </div>
        
        
                  </div>
        </section>
      
           
        </>
    )
}