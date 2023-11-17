import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import banner1 from '../assets/banner/bannerImgOne.webp';

const Slider = () => {
	return (
		<div className='sliderContainer'>
			<div className='arrowLeft arrow'>
				<FaArrowLeft />
			</div>
			<div className='wrapper'>
				<div className='slide'>
					<div className='imgContainer'>
						<div className='image'>
							<img
								src={banner1}
								alt=''
							/>
						</div>
					</div>
					<div className='infoContainer'></div>
				</div>
			</div>
			<div className='arrowRight arrow'>
				<FaArrowRight />
			</div>
		</div>
	);
};

export default Slider;
