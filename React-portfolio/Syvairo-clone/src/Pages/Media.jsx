import { useState } from "react";
import MediaCards from "../Components/MediaCards";

export default function Media(){

    const [filter, setFilter] = useState("all")
   

    return(

      

        <>
        <section className=" bg-linear-to-tr from-[#110f35] via-[#000002] to-[#220141] py-6 px-4">

            <div className="flex justify-end gap-2">
                <button className="bg-cyan-400 px-4 py-1 rounded-xl" onClick={()=> setFilter("all")}>All</button>
                <button className="bg-cyan-400 px-4 py-1 rounded-xl" onClick={()=> setFilter("ai")}>Ai</button>
                <button className="bg-cyan-400 px-4 py-1 rounded-xl" onClick={()=> setFilter("automation")}>Automation</button>
                <button className="bg-cyan-400 px-4 py-1 rounded-xl" onClick={()=> setFilter("caseStudy")}>Case Study</button>
                <button className="bg-cyan-400 px-4 py-1 rounded-xl" onClick={()=> setFilter("companyNews")}>Company News</button>
            </div>
        <MediaCards  filter={filter} />
        </section>
        
        </>
    )
}