import React from 'react'

const About = () => {
    return (
		<div
			name="about"
			className="w-full h-screen text-gray-300 bg-slate-900"
		>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<div className="max-w-[1000px] w-full gap-8 grid grid-cols-2">
					<div className="pb-8 pl-4 sm:text-right">
						<p className="inline text-4xl font-bold border-b-4 border-pink-600">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="grid sm:grid-cols-2 max-w-[1000px] w-full gap-8 px-4">
					<div className="pb-8 pl-4 text-4xl font-bold sm:text-right">
						<p>
							Hi, I'm Efosa, nice to meet you. Please take a look
							around my profile.
						</p>
					</div>

					<div>
						<p>
							I am passionate about building excellent software
							that improves the lives of those around me. I am
							specialize in creating software for client ranging
							frok individual and small-businesses all the way to
							large enterpride corporations.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About
