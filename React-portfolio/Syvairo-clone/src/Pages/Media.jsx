
import {IoMdSearch} from '../assets/Icons'

import { useState } from "react";
import MediaCards from "../Components/MediaCards";

export default function Media(){

    const [filter, setFilter] = useState("all")
   

    return(

      

        <>
        <section className=" bg-linear-to-tr from-[#110f35] via-[#000002] to-[#220141] py-6 px-4">

            <h2 className="text-center text-white text-2xl md:text-5xl font-bold mb-12" >Media & Blog</h2>

            {/* Input  */}
           <div className='relative '>
             <input type="text" placeholder="Search Post" className="text-white py-2 px-12 w-[70%] md:w-[30%] bg-[#FFFFFF0F] border border-[#FFFFFF1F] rounded-2xl" />
            <IoMdSearch className='absolute top-3 left-3 text-white text-xl'/>
           </div>

            <div className="flex flex-col md:flex-row  justify-end gap-2 mt-6 ">
             
             <div className="btn-1 flex gap-2 text-[#aaaaaa] ">
                   <button className="bg-[#ffffff0f] px-4 py-1 rounded-xl" onClick={()=> setFilter("all")}>All</button>
                <button className="bg-[#ffffff0f] px-4 py-1 rounded-xl" onClick={()=> setFilter("ai")}>Ai</button>
                <button className="bg-[#ffffff0f] px-4 py-1 rounded-xl" onClick={()=> setFilter("automation")}>Automation</button>
             </div>
               
               <div className="btn-2 flex gap-2 text-[#aaaaaa] ">
                 <button className="bg-[#ffffff0f] px-4 py-1 rounded-xl" onClick={()=> setFilter("caseStudy")}>Case Study</button>
                <button className="bg-[#ffffff0f] px-4 py-1 rounded-xl" onClick={()=> setFilter("companyNews")}>Company News</button>
               </div>
            </div>

        <MediaCards  filter={filter} />
        </section>
        
        </>
    )
}