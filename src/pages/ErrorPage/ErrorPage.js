import React from 'react'
import PropTypes from 'prop-types'
import './ErrorPage.css';
import Hero from '../../globalComponents/Hero/js/Hero';
import Banner from '../../globalComponents/Banner/js/Banner';
import {Link} from 'react-router-dom';

// import Dropdown from '../../globalComponents/js/Dropdown';

// var MenuItems = [{text: 'Home', path: '/', classes: 'dropdown-item'}, {text: 'About', path: '/about', classes: 'dropdown-item'}, {text: 'Contact', path: '/contact', classes: 'dropdown-item'}];
// var ButtonComponents = {className: 'btn dropdown-toggle', type: 'button', id: 'dropdownMenuButton', dataToggle: 'dropdown', ariaHaspopup: 'true', ariaExpanded: 'false'};
// <Dropdown data="Menu" pages={MenuItems} components={ButtonComponents} />

const ErrorPage = () => {
	return (
		<div>
			<Hero hero="defaultHero">
				<Banner title="Error Page" subtitle="This is Error Page">
					<Link to="/"><button className="btn btn-primary">Back to Home Page</button></Link>
				</Banner>
			</Hero>
		</div>
	)
}

export default ErrorPage