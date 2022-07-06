import react from "react"
import workImg from "../asset/workImg.jpeg";
import realEstate from "../asset/realestate.jpg"
const Work = () => {
    return (
		<div
		 name="work" className="w-full text-gray-300 md:h-screen bg-slate-900">
			<div className="max-w-[1000px] mx-auto p-4 justify-center w-full  pb-8 flex flex-col">
				<p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
					Work
				</p>
				<p className="py-6 italic">Check out my other projects</p>
			</div>
			<div className="container grid items-center justify-center w-full gap-4 py-8 mx-auto sm:grid-cols-2 md:grid-cols-3 group">
				<span className="duration-500 shadow-md hover:scale-125 ">
					<img src={workImg} />
				</span>
				<span className="duration-500 shadow-md hover:scale-125">
					<img src={realEstate} />
				</span>
				<span className="duration-500 shadow-md hover:scale-125">
					<img src={workImg} />
				</span>
				<span className="duration-500 shadow-md hover:scale-125">
					<img src={realEstate} />
				</span>
				<span className="duration-500 shadow-md hover:scale-125">
					<img src={workImg} />
				</span>
				<span className="duration-500 shadow-md hover:scale-125">
					<img src={realEstate} />
				</span>
			</div>
		</div>
	);
}

export default Work
