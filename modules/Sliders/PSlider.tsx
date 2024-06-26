"use client";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";

export default function PSlider(): JSX.Element {
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
			<Slider ref={sliderRef} {...settings}>
				<div className="w-full">
					<Image
						src="/image/product.png"
						alt="product image"
						height={317}
						width={361}
						className="mx-auto"
					/>
				</div>
				<div className=" w-full ">
					<Image
						src="/image/product.png"
						alt="product image"
						height={317}
						width={361}
						className="mx-auto"
					/>
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
