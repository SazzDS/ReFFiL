import React from 'react'
import PropTypes from 'prop-types'
import './Documentation.css';
import DropdownSection from './section/Dropdown/Dropdown';
import IntroductionSection from './section/Introduction/Introduction';
import CollapseSection from './section/Collapse/Collapse';
import AccordionSection from './section/Accordion/Accordion';
import NavbarSection from './section/Navbar/Navbar';
import GeneralSection from './section/General/General';
import ImageSliderSection from './section/ImageSlider/ImageSlider';
import DatePickerSection from './section/DatePicker/DatePicker';
import ErrorSection from '../ErrorPage/ErrorPage';

var MenuItems = [{text: 'Home', path: '/', classes: 'dropdown-item'}, {text: 'About', path: '/about', classes: 'dropdown-item'}, {text: 'Contact', path: '/contact', classes: 'dropdown-item'}];
var ButtonComponents = {className: 'btn dropdown-toggle', type: 'button', id: 'dropdownMenuButton', dataToggle: 'dropdown', ariaHaspopup: 'true', ariaExpanded: 'false'};
			// <Dropdown data="Menu" pages={MenuItems} components={ButtonComponents} />
const Documentation = () => {
	var dir = window.location.pathname;
	if(dir.split('/').pop() === 'Introduction') {
		var tempElement = <IntroductionSection />
	} else if(dir.split('/').pop() === 'General') {
		var tempElement = <GeneralSection />
	} else if(dir.split('/').pop() === 'Dropdown') {
		var tempElement = <DropdownSection />
	} else if(dir.split('/').pop() === 'Collapse') {
		var tempElement = <CollapseSection />
	} else if(dir.split('/').pop() === 'Accordion') {
		var tempElement = <AccordionSection />
	} else if(dir.split('/').pop() === 'Navbar') {
		var tempElement = <NavbarSection />
	} else if(dir.split('/').pop() === 'ImageSlider') {
		var tempElement = <ImageSliderSection />
	} else if(dir.split('/').pop() === 'DatePicker') {
		var tempElement = <DatePickerSection />
	} else {
		var tempElement = <ErrorSection />
	}
	return tempElement;
}

export default Documentation