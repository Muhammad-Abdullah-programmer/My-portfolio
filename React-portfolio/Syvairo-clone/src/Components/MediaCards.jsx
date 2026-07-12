export default function MediaCards(){


    return(

        <>

        
        <div className="cards my-6 py-4 flex px-4 gap-4 flex-col md:flex-row  md:grid md:grid-cols-3 md:grid-rows-2">

            {/* Card 1  */}
            <div className="card-1 bg-cyan-950 md:col-span-1 rounded-2xl md:flex md:flex-col md:justify-between ">

                {/* Image  */}
                <div className="image w-[100%]  ">
                    <img src="/mediacard-1.jpg" alt="" className="object-cover rounded-2xl " />
                </div>

                 {/* text  */}
                <div className="text flex flex-col gap-2 p-5 text-[#ffffff]  ">

                    <span className="text-[#00ced1] font-semibold text-sm ">Ai . July 12, 2026</span>
                    <h3 className="text-xl font-bold text-[#ffffff]">All Transforming Business in 2026</h3>
                    <p className="line-clamp-2">Discover how AI agents automate workflows and increase efficiency.Discover how AI agents automate workflows and increase efficiency</p>

                </div>
            </div>

            {/* Card 2  */}
            <div className="card-1 bg-cyan-950 md:col-span-1 rounded-2xl md:flex md:flex-col md:justify-between ">

                {/* Image  */}
                <div className="image w-[100%] ">
                    <img src="/mediacard-2.jpg" alt="" className="object-cover rounded-2xl " />
                </div>

                 {/* text  */}
                <div className="text flex flex-col  gap-2 p-5 text-[#ffffff]">

                    <span className="text-[#00ced1] font-semibold text-sm ">Automation . July 12, 2026</span>
                    <h3 className="text-xl font-bold text-[#ffffff]">Automation Tools That Save Times</h3>
                    <p className="line-clamp-2">Top automation tools for SMBs and interprises</p>

                </div>
            </div>

            {/* Card 3  */}
            <div className="card-1 bg-cyan-950 md:col-span-1 rounded-2xl md:flex md:flex-col md:justify-between ">

                {/* Image  */}
                <div className="image w-[100%] ">
                    <img src="/mediacard-3.jpg" alt="" className="object-cover rounded-2xl " />
                </div>

                 {/* text  */}
                <div className="text flex flex-col gap-2 p-5 text-[#ffffff]">

                    <span className="text-[#00ced1] font-semibold text-sm ">Case study . July 12, 2026</span>
                    <h3 className="text-xl font-bold text-[#ffffff]"> Savyairo Case study 20% ROI</h3>
                    <p className="line-clamp-2">How a client scaled revenue using Ai automation</p>

                </div>
            </div>

            {/* Card 4  */}
              <div className="card-1 bg-cyan-950 md:col-span-1 rounded-2xl md:flex md:flex-col md:justify-between ">

                {/* Image  */}
                <div className="image w-[100%] ">
                    <img src="/mediacard-4.jpg" alt="" className="object-cover rounded-2xl " />
                </div>

                 {/* text  */}
                <div className="text flex flex-col gap-2 p-5 text-[#ffffff]">

                    <span className="text-[#00ced1] font-semibold text-sm ">Company News . July 12, 2026</span>
                    <h3 className="text-xl font-bold text-[#ffffff]">Company Updates & News</h3>
                    <p className="line-clamp-2">Latest news from Savyario HQ</p>

                </div>
            </div>
        </div>
        </>
    )
}