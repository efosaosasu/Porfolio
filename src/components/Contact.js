import React from 'react'

const Contact = () => {
    return (
		<div
			name="contact"
			className="flex items-center justify-center w-full h-screen p-4 bg-slate-900 "
		>
			<form
				action="https://getform.io/f/5305d364-a976-42a3-9f32-64373d8d9032"
				className="flex flex-col max-w-[1000px] w-full"
				method="POST"
			>
				<div className="pb-8">
					<p className="inline text-4xl font-bold text-white border-b-4 border-pink-600">
						Contact
					</p>
					<p className="py-5 italic text-white">
						Submit the form below to Efosa.osasumwen@gmail.com
					</p>
				</div>
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="p-1 my-4 bg-slate-300"
				></input>
				<input
					type="email"
					placeholder="Email"
					name="email"
					className="p-2 my-4 bg-slate-300"
				></input>
				<textarea
					name="message"
					cols="30"
					rows="10"
					className="p-2 bg-slate-300"
					placeholder="Message"
				></textarea>
				<button className="flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:border-pink-600 hover:bg-pink-600 ">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Contact
