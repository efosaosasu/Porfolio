import React from 'react'
import { HiArrowNarrowRight, HiArrowRight } from 'react-icons/hi';

const Home = () => {
    return (
		<div name="home" className="w-full h-screen bg-slate-900 ">
			<div className="max-w-[1000px] px-8 mx-auto flex flex-col justify-center h-full">
				<p className="text-pink-600">Hi, my name is ...</p>
				<h1 className="text-4xl font-bold text-white sm:text-7xl">
					Efosa Osasumwen
				</h1>
				<h2 className="text-4xl font-bold text-slate-700 sm:text-7xl">
					I am a frontend Developer
				</h2>
				<p className="py-4 text-slate-600 max-w-[700px]">
					I am a frontend developer specializing in building
					exceptional digital experience. I build beatiful landing. Currently I am focused on building responsive front-end web application.
					
					
				</p>
				<div>
					<button className="flex items-center px-6 py-3 my-2 text-white border-2 hover:bg-pink-600 hover:border-pink-600 group">
						View Work
						<HiArrowNarrowRight className="ml-4 duration-300 group-hover:rotate-90"/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home
