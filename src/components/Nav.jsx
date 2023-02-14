import React from 'react'

const Nav = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-between items-center md:px-10  ">
			<a href="/" className=" text-[4rem] sm:text-[2rem] font-medium text-center cursor-pointer">
				P
			</a>
			<div className=" flex flex-row justify-between md:justify-evenly w-[90%] sm:w-[40%] ">
				<a href="#about">About</a>
				<a href="#projects">Projects</a>
				<a href="#skills">skills</a>
				<a href="#contact">contact</a>
			</div>
		</div>
	)
}

export default Nav
