import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import banner1 from '../assets/banner/bannerImgOne.webp';
import banner2 from '../assets/banner/bannerImgTwo.webp';
import banner3 from '../assets/banner/bannerImgThree.webp';

const Slider = () => {
	const [slide, setSlide] = useState(0);

	const handleSlidePlus = () => {
		setSlide(slide === 2 ? 0 : (prev) => prev + 1);
	};

	const handleSlideMinus = () => {
		setSlide(slide === 0 ? 2 : (prev) => prev - 1);
	};
	// setInterval(() => {
	// 	setSlide(slide === 2 ? 0 : (prev) => prev + 1);
	// }, 10000);
	// console.log(slide);

	const imgData = [banner1, banner2, banner3];

	return (
		<div className='sliderContainer'>
			<div
				className='arrowLeft arrow'
				onClick={handleSlideMinus}>
				<FaArrowLeft />
			</div>
			<div className='image transform'>
				<img
					src={imgData[slide]}
					alt=''
					className='img'
				/>
			</div>
			<div
				className='arrowRight arrow'
				onClick={handleSlidePlus}>
				<FaArrowRight />
			</div>
		</div>
	);
};

export default Slider;
