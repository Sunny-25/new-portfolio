import { Nav, BgBlur } from './'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Hero = () => {
	return (
		<div className="h-[100%]">
			<section id="nav" className=" snap-start  ">
				<Nav />
			</section>
			<BgBlur />
			<div className=" flex flex-col justify-center items-center h-[80%] ">
				<div className="flex flex-col gap-5">
					<span className=" text-xl uppercase ml-[5rem]  ">i am</span>
					<span className="uppercase font-bold text-7xl sm:text-9xl self-start drop-shadow-[1rem_1rem_1rem_black]">praveen</span>
					<div className=" flex flex-col  items-start uppercase ml-[12rem] sm:ml-[24rem]">
						<span className="">a web</span>
						<span> developer</span>
					</div>
				</div>
			</div>
			<div className=" flex flex-col ml-[2rem] gap-2">
				<FaFacebookF />
				<FaTwitter />
				<FaInstagram />
			</div>
		</div>
	)
}

export default Hero
