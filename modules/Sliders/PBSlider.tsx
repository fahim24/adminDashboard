"use client";
import React from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PBSlider(): JSX.Element {
	const settings: Settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			<Slider {...settings}>
				<div className="px-4 lg:px-10 text-white space-y-3">
					<p>September 12-22</p>
					<p className="font-bold text-2xl md:text-4xl w-full lg:w-1/2">
						Enjoy free home delivery in this summer
					</p>
					<p className="pb-5">Designer Dresses - Pick from trendy Designer Dress.</p>
					<button className="btn bg-COrange ">Get Started</button>
				</div>
				<div className="px-4 lg:px-10 text-white space-y-3">
					<p>September 12-22</p>
					<p className="font-bold text-2xl md:text-4xl w-full lg:w-1/2">
						Enjoy free home delivery in this summer
					</p>
					<p className="pb-5">Designer Dresses - Pick from trendy Designer Dress.</p>
					<button className="btn bg-COrange ">Get Started</button>
				</div>
			</Slider>
		</>
	);
}
