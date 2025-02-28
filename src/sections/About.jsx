import React from "react";

const About = () => {
    return(
        <section className="sm:px-10 px-5 my-20 border border-blue-500">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 border border-blue-500 gap-5 h-full ">
                <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5 border border-blue-500">
                    <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className=" text-xl font-semibold mb-2 text-white font-generalsans ">Hello, I'm Harun Bansode</p>
                        <p className="text-[#afb0b6] text-base font-generalsans"> I have 1 year of experience in machine learning and like to develop more...</p>
                    </div>
                </div>
                <div className="col-span-1 xl: row-span-3">
                    <div className="grid container">
                        <img src="/assets/grid2.png" alt="grid2.png" className="w-full sm:w-[276]px h-fit object-contain"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;