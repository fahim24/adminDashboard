"use client";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function FPSlider(): JSX.Element {
	let sliderRef = useRef<Slider>(null);
	const next = () => {
		sliderRef.current?.slickNext();
	};
	const previous = () => {
		sliderRef.current?.slickPrev();
	};
	const settings: Settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			<Slider className="w-4/5 mx-auto" ref={sliderRef} {...settings}>
				<div className=" bg-CGreen text-white font-bold h-48 ">
					<span className="size-full flex justify-center items-center text-6xl">1</span>
					<p className="font-bold text-center mt-3 text-CDark">Beats Headphone 2019</p>
					<p className="text-CBlue text-center">$89.00</p>
				</div>
				<div className=" bg-CGreen text-white font-bold h-48">
					<span className="size-full flex justify-center items-center text-6xl">2</span>
					<p className="font-bold text-center mt-3 text-CDark">Beats Headphone 2019</p>
					<p className="text-CBlue text-center">$89.00</p>
				</div>
				<div className=" bg-CGreen text-white font-bold h-48 ">
					<span className="size-full flex justify-center items-center text-6xl">3</span>
					<p className="font-bold text-center mt-3 text-CDark">Beats Headphone 2019</p>
					<p className="text-CBlue text-center">$89.00</p>
				</div>
			</Slider>
			<button
				className="absolute top-1/2 right-2  size-10 flex justify-center items-center bg-CBG rounded-full cursor-pointer slick-arrow group"
				onClick={next}>
				<FaAngleRight className="text-lg group-hover:text-CBlue" />
			</button>
			<button
				className="absolute top-1/2  left-2 size-10 flex justify-center items-center bg-CBG rounded-full cursor-pointer slick-arrow group"
				onClick={previous}>
				<FaAngleLeft className="text-lg group-hover:text-CBlue" />
			</button>
		</>
	);
}
