"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderSettings {
	dots: boolean;
	infinite: boolean;
	speed: number;
	slidesToShow: number;
	slidesToScroll: number;
}

export default function MySlider2(): JSX.Element {
	const settings: SliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			<Slider {...settings}>
				<div className="px-10 text-white space-y-3">
					<p>September 12-22</p>
					<p className="font-bold text-4xl w-1/2">Enjoy free home delivery in this summer</p>
					<p className="pb-5">Designer Dresses - Pick from trendy Designer Dress.</p>
					<button className="bg-COrange px-7 py-2 rounded-xl  font-semibold">Get Started</button>
				</div>
				<div className="px-10 text-white space-y-3">
					<p>September 12-22</p>
					<p className="font-bold text-4xl w-1/2">Enjoy free home delivery in this summer</p>
					<p className="pb-5">Designer Dresses - Pick from trendy Designer Dress.</p>
					<button className="bg-COrange px-7 py-2 rounded-xl  font-semibold">Get Started</button>
				</div>
			</Slider>
		</>
	);
}
