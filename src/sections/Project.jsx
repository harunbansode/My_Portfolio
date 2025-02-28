import { myProjects } from "../constants";

const Project = () => {
    return(
        <section className="sm:px-10 px-5 my-20">
            <p className="text-3xl font-semibold mb-2 text-white font-generalsans"> My Work </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={myProjects[0].spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;