
// Icons 

import {IoMdBusiness, GoIssueReopened,FaRobot} from '../assets/Icons'

export default function BusinessSolution(){


    return(

        <>
         <div className="bg-linear-to-tr from-[#110f35] via-[#000002]  to-[#220141] w-[100%] py-">


{/* Heading  */}
<div className="heading mx-auto max-w-[80%] ">

    <div className='border-2 border-cyan-700 rounded-full md:max-w-[18%] max-w-[80%] mx-auto  bg-cyan-500/20'>
        <span className="text-[#22d3ee] flex justify-center items-center gap-2 "> <IoMdBusiness className='text-white' /> Business Solution</span>
    </div>

            <h2 className='my-4 text-2xl md:text-5xl bg-gradient-to-b  from-[#ffffff] to-[#00ced1] bg-clip-text text-transparent [text-shadow:0_0_38px_rgba(0,206,209,0.45),0_0_20px_rgba(0,206,209,0.25)]
  opacity-100 text-center'>How AI Transforms Your Business</h2>

  <p className='text-white text-center text-xl my-4 '>From manual chaos to fully automated operations in 3 steps.</p>

</div>

{/* Image Div  */}
<div className="image max-w-[70%] mx-auto my-20  border-2 border-[#00ced1] rounded-2xl hover:inset-[#00ced1]  opacity-40 hover:opacity-100 p-2 hover:scale-110 transition-all ease-in-out duration-300 ">
    <img src="/dashboard.png" alt="" className='  ' />
</div>

{/* Cards  */}
<div className="cards flex justify-center gap-4 max-w-[80%] mx-auto my-20 grid md:grid-rows-1 md:grid-cols-3 grid-rows-3 grid-cols-1 ">

    <div className="card-1 flex flex-col items-center gap-4 hover:-translate-y-1.5 transition-all ease-in duration-300 ">
<GoIssueReopened className='text-cyan-500 font-bold text-2xl '/>
<h2 className='text-white font-bold text-2xl'>Problem</h2>
<span className='text-white/45   tracking-wider text-md text-center'>Missed leads, slow teams menual operation.</span>
    </div>

    {/* Card 2  */}
       <div className="card-1 flex flex-col items-center gap-4 hover:-translate-y-1.5 transition-all ease-in duration-300 ">
<FaRobot className='text-cyan-500 font-bold text-2xl '/>
<h2 className='text-white font-bold text-2xl'>Ai Integration</h2>
<span className='text-white/45   tracking-wider text-md text-center'>Autonoumus workflows that manage replys, calls, and booking 24/7.</span>
    </div>

{/* card 3  */}

   <div className="card-1 flex flex-col items-center gap-4  hover:-translate-y-1.5 transition-all ease-in duration-300 ">
<FaRobot className='text-cyan-500 font-bold text-2xl '/>
<h2 className='text-white font-bold text-2xl'>Ai Integration</h2>
<span className='text-white/45   tracking-wider text-md text-center'>Autonoumus workflows that manage replys, calls, and booking 24/7.</span>
    </div>



</div>

{/* Button  */}
    <a href="" className='text-center md:ml-[43%] ml-[20%]  '> <button className=' mb-8 bg-cyan-600 border-2 border-cyan-500 text-white text-lg [box-shadow:0_0_2px_rgb(0,206,209),0_0_10px_rgb(0,206,209)]  px-8 py-4 rounded-full  transition-all duration-300 hover:scale-110 '>Calculate Your ROI</button> </a>

         </div> 

        </>
    )
}