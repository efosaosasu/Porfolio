import React from 'react'
import CSS from "../asset/css.png";
import Javascript from "../asset/javascript.png";
import HTML from "../asset/html.png";
import Reacts from "../asset/react.png";
import Tailwind from "../asset/tailwind.png";
const Skills = () => {
    return (
		<div
			name="skills"
			className="w-full h-screen text-gray-300 bg-slate-900"
		>
			<div className="flex flex-col justify-center max-w-[1000px]  mx-auto p-4 w-full h-full">
				<div>
					<p className="inline text-4xl font-bold border-b-4 border-pink-600">
						Skills
					</p>
					<p className="py-4 italic">
						These are technologies I have worked with
					</p>
				</div>

				<div className="grid justify-center w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
					<div className="duration-500 shadow-md shadow-slate-300 hover:scale-125">
						<img
							className="w-20 mx-auto "
							src={Javascript}
							alt="Css icon"
						/>
						<p className="my-4 font-bold">Javascript</p>
					</div>
					<div className="duration-500 shadow-md hover:scale-125 shadow-slate-300 ">
						<img
							className="w-20 mx-auto"
							src={CSS}
							alt="Css icon"
						/>
						<p className="my-4 font-bold">CSS</p>
					</div>
					<div className="duration-500 shadow-md hover:scale-125 shadow-slate-300 ">
						<img
							className="w-20 mx-auto"
							src={HTML}
							alt="Css icon"
						/>
						<p className="my-4 font-bold">HTML</p>
					</div>
					<div className="duration-500 shadow-md hover:scale-125 shadow-slate-300 ">
						<img
							className="w-20 mx-auto"
							src={Tailwind}
							alt="Css icon"
						/>
						<p className="my-4 font-bold">Tailwind</p>
					</div>
					<div className="duration-500 shadow-md hover:scale-125 shadow-slate-300 ">
						<img
							className="w-20 mx-auto"
							src={Reacts}
							alt="Css icon"
						/>
						<p className="my-4 font-bold">React</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills
