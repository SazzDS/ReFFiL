import React from 'react'
import PropTypes from 'prop-types'
import './Dropdown.css';
import DropdownComponent from '../../../../globalComponents/Dropdown/js/Dropdown';

var MenuItems = [{text: 'Home', path: '/', classes: 'dropdown-item'}, {text: 'About', path: '/about', classes: 'dropdown-item'}, {text: 'Contact', path: '/contact', classes: 'dropdown-item'}];
var ButtonComponents = {className: 'btn dropdown-toggle', type: 'button', id: 'dropdownMenuButton', dataToggle: 'dropdown', ariaHaspopup: 'true', ariaExpanded: 'false'};
const Dropdown = () => {

	return (
		<div>
			<DropdownComponent data="Menu" pages={MenuItems} components={ButtonComponents} />
		</div>
	)
}

export default Dropdown