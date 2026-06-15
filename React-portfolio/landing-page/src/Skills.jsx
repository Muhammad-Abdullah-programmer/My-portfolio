import {faReact, faTailwindCss, faHtml5, faCss, faFigma} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faJs} from '@fortawesome/free-brands-svg-icons'


export default function Skills(){

    return (

        <>
        <section id="skills" className="bg-[#101a33] py-5">
            <div className="sills w-[80%] mx-auto">

                {/* Skills Heading  */}
                <div className="skills-text flex flex-col gap-4 my-4 items-center">
<h2 className="text-white font-semibold tracking-wider md:text-3xl">Skills and Technologies</h2>
<p className="text-white/70  md:w-[40%] text-center">i work with modern tools and Technologies to build fast, scalable and efficient web applications</p>
                </div>

                {/* Cards  */}
                <div className="cards-div grid grid-rows-6 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-3 w-full py-4">
                    {/* Card 1 */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faReact} className='text-[#238ff5] md:text-5xl'/>

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>React</h2>
            <p className='text-white/70'>Building Fast Intereactive, and Components-based UIs with clean state management</p>
        </div>
    </div>
  </div>
</div>

{/* Card 2  */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faJs} className='text-[#238ff5] md:text-5xl'/>

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>Javs Script</h2>
            <p className='text-white/70'>Writing efficient, modern, and optimized code</p>
        </div>
    </div>
  </div>
</div>

{/* Card 3  */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faTailwindCss} className='text-[#238ff5] md:text-5xl'/>

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>Tailwind CSS</h2>
            <p className='text-white/70'>Creating responsive, modern, and clean layouts quickly using utility-first styling</p>
        </div>
    </div>
  </div>
</div>

{/* Card 4  */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faHtml5} className='text-[#238ff5] md:text-5xl'/>

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>HTML</h2>
            <p className='text-white/70'>Creating clean, modern, structure of web-page using symantic tags.</p>
        </div>
    </div>
  </div>
</div>

{/* Card 5  */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faCss} className='text-[#238ff5] md:text-5xl'/>

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>CSS</h2>
            <p className='text-white/70'>Writing Clean code for styling and making responsive web-page using CSS</p>
        </div>
    </div>
  </div>
</div>

{/* Card 6  */}
<div className=" w-full border-2  card-1 row-span-1 col-span-2 md:col-span-1 rounded-2xl bg-gradient-to-r from-blue-500 to-[#6e4962] p-[2px] flex flex-col items-center">
  <div className="div h-full rounded-2xl bg-gradient-to-r from-[#132243] to-[#201c33] p-6 ">
      
    <div className="icon flex flex-col items-center gap-4">
        <FontAwesomeIcon icon={faFigma} className='text-[#238ff5] md:text-5xl'/>

        <div className="card-text text-center">
            <h2 className='text-white text-2xl mb-4'>Figma</h2>
            <p className='text-white/70'>Converting figma, design into code professionally </p>
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