"use client";
import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface SliderSettings {
	dots: boolean;
	infinite: boolean;
	speed: number;
	slidesToShow: number;
	slidesToScroll: number;
	// nextArrow: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
	// prevArrow: React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
}

export default function MySlider(): JSX.Element {
	let sliderRef = useRef<Slider>(null);
	const next = () => {
		sliderRef.current?.slickNext();
	};
	const previous = () => {
		sliderRef.current?.slickPrev();
	};
	const settings: SliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		// nextArrow: <FaAngleRight className="text-lg" />,
		// prevArrow: <FaAngleRight className="text-lg" />,
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
				className="absolute top-1/2 right-2  size-10 flex justify-center items-center bg-CBG rounded-full cursor-pointer slick-arrow"
				onClick={next}>
				<FaAngleRight className="text-lg" />
			</button>
			<button
				className="absolute top-1/2  left-2 size-10 flex justify-center items-center bg-CBG rounded-full cursor-pointer slick-arrow"
				onClick={previous}>
				<FaAngleLeft className="text-lg" />
			</button>
		</>
	);
}
