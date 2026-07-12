import {
  IoMdBusiness,
  FaRocket,
  IoCheckmarkCircleOutline,
} from "../assets/Icons";

import React from "react";
// import ServiceCards from "./Servicecards";

const Process = () => {
  return (

    <>
   
     
   

    <section className="bg-gradient-to-tr from-[#110f35] via-[#000002] to-[#220141] py-4 ">
      <div className="relative overflow-hidden py-6">
        <div className="border-1 py-1 mt-8 border-cyan-700 rounded-full md:max-w-[12%] w-[54%]   mx-auto bg-cyan-500/20">
          <span className="text-[#22d3ee] flex justify-center items-center gap-2 ">
            {" "}
            <FaRocket className="text-white" /> Our Process
          </span>
        </div>

        {/* Text  */}
        <div className="text flex flex-col my-4 items-center ">
          <h2 className="bg-linear-to-b from-white to-cyan-400 bg-clip-text text-transparent text-center font-semibold text-3xl md:text-5xl  ">
            From idea To impact
          </h2>
          <p className="text-white  pl-5 my-4 md:w-[60%]">
            Our structured 4-step process guarantees measurable results and
            sustainable value creation. Each phase is designed to minimize risks
            and maximize your ROI.
          </p>

          <div className="para w-[100%]">
            <ul className="text-white w-[100%]  gap-6 flex justify-between md:justify-center md:my-6 md:gap-8 list-disc marker:text-cyan-400">
              <li>Guranteed KPIs</li>
              <li>Measureable results</li>
              <li>Continous Optimization</li>
            </ul>
          </div>
        </div>


{/* Cards Div  */}

         <div className="cards flex flex-col gap-10  w-[70%] h-[100%] pl-4  mx-auto">

{/* Card -1  */}
            <div className="card-1 flex flex-col md:items-start gap-4 py-4 px-3 items-center rounded-2xl border-1 border-white/10  bg-white/5 backdrop-blur hover:bg-cyan-400/5 hover:border-cyan-400 transition-all ">
              <h2 className="text-white text-xl font-bold pl-2  ">Supports & Optimization</h2>

              <p className="pl-4 text-white"><span className="text-cyan-600">Focus</span>: Understanding customer needs, identifying automation opportunities, and mapping current processes. We define a proposed solution and detail expected results using KPIs.</p>

              <p className="pl-4 text-white"><span className="text-cyan-600">Output:</span> A detailed project proposal with a clear scope, timeline, and defined KPIs.</p>
            </div>

            {/* Card 2  */}
              <div className="card-1 flex flex-col md:items-start gap-4 py-4 px-3 pl-4 rounded-2xl  border-1 border-white/10  bg-white/5 backdrop-blur hover:bg-cyan-400/5 hover:border-cyan-400 transition-all  ">

              <h2 className="text-white text-xl font-bold pl-2  ">Pilot</h2>

              <p className="pl-4 text-white"><span className="text-cyan-600">Focus</span> We build and test a working minimal version of your automation solution with tangible results.</p>

              <p className="pl-4 text-white"><span className="text-cyan-600">Output:</span> A validated proof-of-concept demonstrating value and meeting key KPIs.</p>
            </div>

            {/* Card 3  */}
            <div className="card-1 flex flex-col gap-4 py-4 px-3 pl-4 rounded-2xl  border-1 border-white/10  bg-white/5 backdrop-blur hover:bg-cyan-400/5 hover:border-cyan-400 transition-all  ">
              <h2 className="text-white text-xl font-bold pl-2">Go-Live</h2>

              <p className="pl-4 text-white"><span className="text-cyan-600">Focus:</span> Rolling out the full validated AI or automation solution including training.</p>

              <p className="pl-4 text-white"><span className="text-cyan-600">Output:</span> A fully operational solution delivering immediate business value.</p>
            </div>

            {/* Card 4  */}
             <div className="card-1 flex flex-col gap-4 py-4 px-3 pl-4 rounded-2xl  border-1 border-white/10  bg-white/5 backdrop-blur hover:bg-cyan-400/5 hover:border-cyan-400 transition-all  ">
              <h2 className="text-white text-xl font-bold pl-2">Support & Optimization</h2>

              <p className="pl-4 text-white"><span className="text-cyan-600">Focus:</span> Continuous monitoring, maintenance, and refinement of automated processes.</p>

              <p className="pl-4 text-white"><span className="text-cyan-600">Output:</span>Guaranteed performance, proactive maintenance, and optimization.</p>
            </div>
          </div>


        {/* Line Div  */}
        
          <div className="w-1 h-[100%] bg-gradient-to-b from-cyan-400/50 to-cyan-400/30 to-transparent absolute top-[18%] md:top-[29%] left-6 md:left-[10%] ">
            {/* Circle 1 */}
            <div className="circle absolute -top-[1%] -left-5 p-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
              <IoCheckmarkCircleOutline className="text-white" />
            </div>

{/* Circle 2  */}
            <div className="circle absolute top-[27%] md:top-[21%] -left-5 p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
              <IoCheckmarkCircleOutline className="text-white" />
            </div>

            {/* Circle 3  */}
            <div className="circle absolute top-[47%] md:top-[39%] -left-5 p-4 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500">
              <IoCheckmarkCircleOutline className="text-white" />
            </div>
               
               {/* Circle 4  */}
                   
                    <div className="circle absolute top-[63%] md:top-[58%] -left-5 p-4 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500">
              <IoCheckmarkCircleOutline className="text-white" />
            </div>

          </div>

         
        
      </div>
    </section>

    </>
  );
};

export default Process;
