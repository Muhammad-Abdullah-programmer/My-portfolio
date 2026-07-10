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

export default function ServiceCards(){

    return(
        <>
        
         <div className="cards-parent bg-black my-4 py-4 flex justify-evenly px-2  gap-4 overflow-x-auto mx-auto md:max-w-[95%] md:overflow-x-hidden  ">
        
                    {/* Card 1 */}
                    <div className="card-1 flex flex-col justify-around md:min-h-[40vh]    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-evenly hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%] md:min-w-[25%] md:max-w-[30%]  ">
        
        
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
                      <div className="card-1    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-around md:min-h-[40vh] hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%] md:min-w-[25%] md:max-w-[30%]  ">
        
        
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
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-around md:min-h-[40vh] hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%] md:min-w-[25%] md:max-w-[30%]  ">
        
        
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
                     {/* Card 1 */}
                    <div className="card-1 flex flex-col justify-around md:min-h-[40vh]    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-evenly hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%] md:min-w-[25%] md:max-w-[30%]  ">
        
        
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
                      <div className="card-1    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-around md:min-h-[40vh] hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%] md:min-w-[25%] md:max-w-[30%]  ">
        
        
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
        
        </>
    )
}