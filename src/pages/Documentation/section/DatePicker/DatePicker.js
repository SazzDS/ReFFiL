import React from 'react'
import PropTypes from 'prop-types'
import './DatePicker.css';
import DatePickerBox from '../../../../globalComponents/DatePicker/js/DatePicker';
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

const DatePicker = () => {

	return (
		<div>
			<DatePickerBox slider={slider} />
		</div>
	)
}

export default DatePicker