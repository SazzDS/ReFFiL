import React from 'react'
import PropTypes from 'prop-types'
import './Documentation.css';
import DropdownSection from './section/Dropdown/Dropdown';
import IntroductionSection from './section/Introduction/Introduction';
import CollapseSection from './section/Collapse/Collapse';
import ErrorSection from '../ErrorPage/ErrorPage';

var MenuItems = [{text: 'Home', path: '/', classes: 'dropdown-item'}, {text: 'About', path: '/about', classes: 'dropdown-item'}, {text: 'Contact', path: '/contact', classes: 'dropdown-item'}];
var ButtonComponents = {className: 'btn dropdown-toggle', type: 'button', id: 'dropdownMenuButton', dataToggle: 'dropdown', ariaHaspopup: 'true', ariaExpanded: 'false'};
			// <Dropdown data="Menu" pages={MenuItems} components={ButtonComponents} />
const Documentation = () => {
	var dir = window.location.pathname;
	console.log(dir.split('/').pop());
	if(dir.split('/').pop() === 'Introduction') {
		var tempElement = <IntroductionSection />	
	} else if(dir.split('/').pop() === 'Dropdown') {
		var tempElement = <DropdownSection />	
	} else if(dir.split('/').pop() === 'Collapse') {
		var tempElement = <CollapseSection />	
	} else {
		var tempElement = <ErrorSection />
	}
	return tempElement;
}

export default Documentation