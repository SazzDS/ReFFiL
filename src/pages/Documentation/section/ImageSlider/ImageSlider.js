import React from 'react'
import PropTypes from 'prop-types'
import './ImageSlider.css';
import ImageSliderBox from '../../../../globalComponents/ImageSlider/js/ImageSlider';
import banner from '../../../../images/bg.jpg';
var slider = [{
	image: banner,
	className: 'carousel-item',
	status: 'active',
	title: 'First slide label',
	description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
	colorCode: '#fff',
	imageCssStyle: ''

},
{
	image: banner,
	className: 'carousel-item',
	status: '',
	title: 'Second slide label',
	description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
	colorCode: '#f2d123',
	imageCssStyle: ''
},
{
	image: banner,
	className: 'carousel-item',
	status: '',
	title: 'Third slide label',
	description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
	colorCode: '#f71259',
	imageCssStyle: ''
}]

const ImageSlider = () => {

	return (
		<div>
			<ImageSliderBox slider={slider} />
		</div>
	)
}

export default ImageSlider