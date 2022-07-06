import React, { useState } from 'react'
import logo from "../asset/logo.png"
import {Link} from "react-scroll";
import {FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes, FaTwitter} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
const Navbar = () => {
const [nav, setnav] = useState(false)
const handleClick =()=>setnav(!nav)

    return (
		<div className="fixed w-full h-[80px] flex justify-between   items-center px-4 bg-slate-900 text-gray-300">
			<div>
				<img src={logo} style={{ width: "50px" }} />
			</div>
			<div className="hidden md:flex">
				<ul className="flex">
					<li>
						<Link to="home" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li>
						<Link to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link to="skills" smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li>
						<Link to="work" smooth={true} duration={500}>
							Work
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div onClick={handleClick} className="z-10 md:hidden ">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-slate-900"
				}
			>
				<li className="py-6 text-4xl">
					<li>
						<Link
							onClick={handleClick}
							to="home"
							smooth={true}
							duration={500}
						>
							Home
						</Link>
					</li>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="about"
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link
						onClick={handleClick}
						to="skills"
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{" "}
					<Link
						onClick={handleClick}
						to="work"
						smooth={true}
						duration={500}
					>
						Work
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="contact"
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>
			<div className="hidden fixed lg:flex flex-col top-[38%] left-0">
				<ul>
					<li className=" w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-2xl">
						<a
							className="flex items-center justify-between w-full text-gray-300"
							href="/"
						>
							Facebook <FaFacebook size={35} />
						</a>
					</li>
					<li className=" w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900  rounded-2xl">
						<a
							className="flex items-center justify-between w-full text-gray-300"
							href="/"
						>
							GitHub
							<FaGithub size={35} />
						</a>
					</li>
					<li className=" w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-green-100 rounded-2xl">
						<a
							className="flex items-center justify-between w-full text-gray-900"
							href="/"
						>
							Linkedin <FaLinkedin size={35} />
						</a>
					</li>
					<li className=" w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-red-100 rounded-2xl">
						<a
							className="flex items-center justify-between w-full text-slate-700"
							href="/"
						>
							Email <HiOutlineMail size={35} />
						</a>
					</li>
					<li className=" w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-2xl">
						<a
							className="flex items-center justify-between w-full text-gray-300"
							href="/"
						>
							Email <HiOutlineMail size={35} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar
