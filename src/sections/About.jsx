import React from "react";
import PlotlyChart from "../components/PlotlyChart.jsx"
import Button from "../components/Button.jsx";

const About = () => {
    const [ hasCopied, setHasCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("harun.bansode@gmail.com");
        // alert("Link copied to clipboard!");
        setHasCopied(true);
        setTimeout( () => {
            setHasCopied(false);
        }, 2000)
    }
    return(
        <section className="sm:px-10 px-5 my-20 ">
            <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
                <div className="w-full h-full border border-black-300 bg-neutral-900/50 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                    <img src="/assets/grid1.png" alt="grid1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className=" text-xl font-semibold mb-2 text-white font-generalsans ">Hello, I'm Harun Bansode</p>
                        <p className="text-[#afb0b6] text-base font-generalsans"> I have 1 year of experience in machine learning and like to develop more...</p>
                    </div>
                </div>
                <div className="col-span-1 xl: row-span-1">
                    <div className="w-full h-full border border-black-300 bg-neutral-900/50 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="/assets/grid2.png" alt="grid2.png" className="w-full sm:w-[276px] h-fit object-contain"/>
                        <div>
                        <p className=" text-xl font-semibold mb-2 text-white font-generalsans "> Tech Slack</p>
                        <p className=" text-[#afb0b6] text-base font-generalsans "> I specialsie in scikit learn which helps to build machine learning model</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-1">
                    <div className="w-full h-full border border-black-300 bg-neutral-900/50 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <div className="rounded-3xl w-full sm:h-[326]px h-fit flex justify-center item-center">
                            <PlotlyChart  className="w-full sm:w-[266px] h-fit object-contain"/>
                        </div>
                        <div className="">
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                                I <span className="text-red-500">&#10084;</span> working with Python and ML
                            </p>
                            <Button name="Contact me" isBeam containerClass="w-full mt-10"></Button>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-1">
                    <div className="w-full h-full border border-black-300 bg-neutral-900/50 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className=" text-xl font-semibold mb-2 text-white font-generalsans ">My Passion for Coding</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-1">
                    <div className="w-full h-full border border-black-300 bg-neutral-900/50 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                    <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                    <div className="space-y-2">
                        <p className=" text-[#afb0b6] text-base font-generalsans text-center">Contact me</p>
                        <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                            <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                            <p className="lg:text-1xl md:text-xl font-medium bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent text-white">harun.bansode@gmail.com</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

