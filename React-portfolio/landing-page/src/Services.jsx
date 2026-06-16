import {faReact, faTailwindCss, faHtml5, faCss, faFigma, faPerbyte} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faJs} from '@fortawesome/free-brands-svg-icons'
import {faCode, faCartArrowDown, faBookOpen, faCodeMerge, faScrewdriver} from '@fortawesome/free-solid-svg-icons'

export default function Services(){

    return (

        <>
        <section id="skills" className="bg-[#101a33] py-5">
            <div className="sills w-[80%] mx-auto">

                {/* Skills Heading  */}
                <div className="skills-text flex flex-col gap-4 my-4 items-center">
<h2 className="text-white font-semibold tracking-wider md:text-3xl">Services i Provide</h2>
<p className="text-white/70  md:w-[40%] text-center">i offered development services focused on building fast, modern, and user-friendly digital experiences</p>
                </div>

                {/* Cards  */}
                <div className="cards-div grid grid-rows-6 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-3 w-full py-4">
                    {/* Card 1 */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
<FontAwesomeIcon icon={faCode} className='text-[#238ff5] md:text-5xl' />

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>Frontend Development</h2>
            <p className='text-white/70'>Fast responsive and user-friendly interfaces built with React and modern ui frameworks like Tailwind CSS</p>
        </div>
    </div>
  </div>
</div>

{/* Card 2  */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faCartArrowDown} className='text-[#238ff5] md:text-5xl' />

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>E-commerece Development</h2>
            <p className='text-white/70'>Build E-commerece website for business including all modern, features</p>
        </div>
    </div>
  </div>
</div>

{/* Card 3  */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faBookOpen} className='text-[#238ff5] md:text-5xl'/>

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>Education Development</h2>
            <p className='text-white/70'>Build Education website for business and individuals  including all modern, features</p>
        </div>
    </div>
  </div>
</div>

{/* Card 4  */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faCodeMerge} className='text-[#238ff5] md:text-5xl'/>

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>API Integration</h2>
            <p className='text-white/70'>We connect front end with backend using API integration</p>
        </div>
    </div>
  </div>
</div>

{/* Card 5  */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faPerbyte} className='text-[#238ff5] md:text-5xl'/>

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>Performance Optimization</h2>
            <p className='text-white/70'>We improve web Performance by improving its speed </p>
        </div>
    </div>
  </div>
</div>

{/* Card 6  */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faScrewdriver} className='text-[#238ff5] md:text-5xl'/>

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>Bug Fixing and Maintenance</h2>
            <p className='text-white/70'>We fix issues related to responsivenace and ui </p>
        </div>
    </div>
  </div>
</div>
                </div>
            </div>

        </section>
        
        </>
    )
}