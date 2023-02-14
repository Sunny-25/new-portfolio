import React from 'react'

const BgBlur = () => {
	return (
		<div className=" relative grid place-items-center justify-center -left-[20rem] -z-10">
			<div className=" bg-white opacity-[0.05] h-[80rem] w-[80rem]  blur-3xl rounded-full -z-10 absolute border-none" />
			<div className=" bg-white  opacity-[0.05] h-[70rem] w-[70rem]  blur-3xl rounded-full -z-8 absolute border-none " />
			<div className=" bg-white opacity-[0.05] h-[50rem] w-[50rem]  blur-3xl rounded-full -z-9 absolute border-none " />
			<div className=" bg-white opacity-[0.05] h-[30rem] w-[30rem]  blur-3xl rounded-full -z-9 absolute border-none " />
			<div className=" bg-white opacity-[0.05] h-[10rem] w-[10rem]  blur-3xl rounded-full -z-9 absolute border-none " />
		</div>
	)
}

export default BgBlur
