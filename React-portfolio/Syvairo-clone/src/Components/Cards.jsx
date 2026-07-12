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
  SlCalender
} from "../assets/Icons";

export default function Cards() {
  return (
    <>
      <section className="bg-gradient-to-tr from-[#110f35] via-[#000002] to-[#220141] py-4 ">
        <div className="border-2 mt-8 border-cyan-700 rounded-full md:max-w-[18%] w-[54%]   mx-auto bg-cyan-500/20">
          <span className="text-[#22d3ee] flex justify-center items-center gap-2 ">
            {" "}
            <IoMdBusiness className="text-white" /> Business Solution
          </span>
        </div>
        <h2 className="bg-linear-to-r from-[#00ced1] to-[#00ced1] bg-clip-text text-transparent text-shadow-2xs my-4 [text-shadow:0_0_38px_rgba(0,206,209,0.35),0_0_20px_rgba(0,206,209,0.2)] text-center transform-none text-2xl md:text-4xl  font-semibold">
          Why Businesses Choose Syvairo
        </h2>

        {/* Cards  */}
        <div className="cards   flex   overflow-x-auto  md:max-w-[80%] px-2 md:overflow-x-hidden  mx-auto md:gap-7 mt-8 py-6 gap-4 md:grid md:grid-cols-3 md:grid-rows-2 ">
         
          {/* Card 1 */}
          <div className="card-1 min-w-[90%]   md:min-w-[70%] max-h-[100%] px-2   flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
            <div className=" flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 ">
              <BsFillLightningChargeFill className="text-cyan-400 font-extrabold text-2xl" />
            </div>

            <div className="text flex flex-col  gap-2">
              <h2 className="text-white text-md font-semibold">
                No missed leades-24/7{" "}
              </h2>
              <p className="text-white text-sm">Follow-ups & replay anytime </p>
            </div>
          </div>

          {/* Card 2  */}
           <div className="card-1 min-w-[90%] max-h-[100%] px-2  flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
            <div className=" flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 ">
              <FaClock className="text-cyan-400 font-extrabold text-2xl" />
            </div>

            <div className="text flex flex-col  gap-2">
              <h2 className="text-white text-md font-semibold">
                No missed leades-24/7{" "}
              </h2>
              <p className="text-white text-sm">Follow-ups & replay anytime </p>
            </div>
          </div>

          {/* Card 3  */}
           <div className="card-1 min-w-[90%] max-h-[100%] px-2  flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
            <div className=" flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 ">
              <FaRocket className="text-cyan-400 font-extrabold text-2xl" />
            </div>

            <div className="text flex flex-col  gap-2">
              <h2 className="text-white text-md font-semibold">
                45+ Automation Agents Ready{" "}
              </h2>
              <p className="text-white text-sm">Launch in days not month </p>
            </div>
          </div>

          {/* card 4  */}
           <div className="card-1 min-w-[90%] max-h-[100%] px-2  flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
            <div className=" flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 ">
              <LuCombine className="text-cyan-400 font-extrabold text-2xl" />
            </div>

            <div className="text flex flex-col  gap-2">
              <h2 className="text-white text-md font-semibold">
                Integrate with any Software{" "}
              </h2>
              <p className="text-white text-sm">API, CRM, ERP, Whatsapp </p>
            </div>
          </div> 

          {/* Card 5  */}
          <div className="card-1 min-w-[90%] max-h-[100%] px-2  flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
            <div className=" flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 ">
              <IoMdResize className="text-cyan-400 font-extrabold text-2xl" />
            </div>

            <div className="text flex flex-col  gap-2">
              <h2 className="text-white text-md font-semibold">
                Custom Ai & RPA solutions{" "}
              </h2>
              <p className="text-white text-sm">
                Task completed end-to-end automatically{" "}
              </p>
            </div>
          </div>

          {/* Card 6  */}
          <div className="card-1 min-w-[90%] max-h-[100%] py-6 px-2  flex gap-4 border transition-all ease-in duration-300 border-cyan-500 rounded-2xl justify-center items-center  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] hover:-translate-y-2 hover:scale-102 snap-center ">
            <div className=" flex justify-center items-center w-20 h-12 rounded-xl bg-cyan-400/20 text-cyan-400 ">
              <IoSettings className="text-cyan-400 font-extrabold text-2xl" />
            </div>

            <div className="text flex flex-col  gap-2">
              <h2 className="text-white text-md font-semibold">
                Custom Ai & RPA solutions{" "}
              </h2>
              <p className="text-white text-sm">
                Task completed end-to-end automatically{" "}
              </p>
            </div>
          </div> 

        </div>

        {/* Case Study  */}
        <div className="case-study py-4">
          <div className="heading">
            <h2
              className=" mt-14 pb-2 text-center text-2xl font-semibold tracking-tight bg-gradient-to-b from-[#00ced1] to-[#00ced1] bg-clip-text text-transparent [text-shadow:0_0_38px_rgba(0,206,209,0.35),0_0_20px_rgba(0,206,209,0.2)] opacity-100 transform-none"
            >
              CASE STUDIES — Real Results from AI Agents
            </h2>
          </div>

          {/* Cards  */}
          <div className="cards-parent  my-4 py-4 flex md:justify-center px-2  gap-4 overflow-x-auto md:mx-auto  md:max-w-[100%] md:overflow-x-hidden  ">

            {/* Card 1 */}
            <div className="card-1   [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
[background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[85%] md:min-w-[25%] md:max-w-[30%]  ">

              <div className="icons flex justify-between  w-[100%]">


             <div className="phone bg-cyan-400/20 text-cyan-400 group-hover:bg-white/20 w-15 h-15 flex justify-center items-center rounded-xl ">
              <FaPhoneAlt/>
             </div>

             <div className="text  bg-cyan-400/20 text-cyan-400 group-hover:bg-white/20 w-30 h-10 font-bold flex justify-center items-center rounded-xl  ">
              <p>Case study</p>
             </div>

            </div>

            {/* Text  */}
            <div className="text flex flex-col items-center ">
              <h3 className="text-white text-xl font-semibold">Ai Receptionist (incoming calls)</h3>
              <span className="text-cyan-700 font-semibold text-center ">Mid-sized E-commerece retailer -USA</span>

              <p className="text-white text-md text-center mt-4">Long wait times and unanswered resulted in lost leads </p>
            </div>

            {/* Uls  */}
            <div className="uls mt-4">
              <ul className="text-white text-sm">
                <li className="flex items-center gap-4"><FaCheck className="text-cyan-400"/> 60% calls without human intervention</li>
                <li className="flex items-center gap-4"><FaCheck className="text-cyan-400"/> 30% increase in leade captured </li>
                <li className="flex items-center gap-4"><FaCheck className="text-cyan-400"/> Staff focused on high-value task</li>
              </ul>
            </div>
            </div>

            {/* Card 2  */}
             <div className="card-1  [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
[background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[90%] md:min-w-[25%]  md:max-w-[30%] ">

              <div className="icons flex justify-between  w-[100%]">


             <div className="phone bg-cyan-400/20 text-cyan-400 group-hover:bg-white/20 w-15 h-15 flex justify-center items-center rounded-xl ">
              <SlCalender/>
             </div>

             <div className="text  bg-cyan-400/20 text-cyan-400 group-hover:bg-white/20 w-30 h-10 font-bold flex justify-center items-center rounded-xl  ">
              <p>Case study</p>
             </div>

            </div>

            {/* Text  */}
            <div className="text flex flex-col items-center">
              <h3 className="text-white text-xl font-semibold">Ai Appointment Booking</h3>
              <span className="text-cyan-700 font-semibold">Healthcare clinic -- Pakistan</span>

              <p className="text-white text-md text-center mt-4">Menual Scheduling caused double booking and missed appointments </p>
            </div>

            {/* Uls  */}
            <div className="uls mt-4">
              <ul className="text-white text-sm">
                <li className="flex items-center gap-4"><FaCheck className="text-cyan-400"/> 35% reduction in no-shows</li>
                <li className="flex items-center gap-4"><FaCheck className="text-cyan-400"/> 25% more weekly appointments </li>
                <li className="flex items-center gap-4"><FaCheck className="text-cyan-400"/> Freeing admin staff for patient care</li>
              </ul>
            </div>
            </div>

            {/* Card 3  */}
             <div className="card-1   min-h-[70vh] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
[background-size:40px_40px] inset-0 border-1 border-cyan-300 rounded-xl py-4 px-4  flex flex-col  justify-between hover:shadow-2xl hover:shadow-cyan-500 transition-all ease-in duration-300 min-w-[90%] md:min-w-[25%] md:max-w-[30%] ">

              <div className="icons flex justify-between  w-[100%]">


             <div className="phone bg-cyan-400/20 text-cyan-400 group-hover:bg-white/20 w-15 h-15 flex justify-center items-center rounded-xl ">
              <FaPhoneAlt/>
             </div>

             <div className="text  bg-cyan-400/20 text-cyan-400 group-hover:bg-white/20 w-30 h-10 font-bold flex justify-center items-center rounded-xl  ">
              <p>Case study</p>
             </div>

            </div>

            {/* Text  */}
            <div className="text flex flex-col items-center">
              <h3 className="text-white text-xl font-semibold text-center text-md w-[100%] ">Multi agent workflow Automation</h3>
              <span className="text-cyan-700 font-semibold">Finincial Service Firm -UK</span>

              <p className="text-white text-md text-center mt-4"> Manual back-office task caused errors and delays   </p>
            </div>

            {/* Uls  */}
            <div className="uls mt-4">
              <ul className="text-white text-sm">
                <li className="flex items-center gap-4"><FaCheck className="text-cyan-400"/> 40% Faster process completion </li>
                <li className="flex items-center gap-4"><FaCheck className="text-cyan-400"/> 30% Fewer errors </li>
                <li className="flex items-center gap-4"><FaCheck className="text-cyan-400"/> 45% Fast lead response time</li>
              </ul>
            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
