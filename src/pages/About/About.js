import React from 'react'
import PropTypes from 'prop-types'
import './About.css';
import Hero from '../../globalComponents/Hero/js/Hero';
import Banner from '../../globalComponents/Banner/js/Banner';
import {Link} from 'react-router-dom';

// import Dropdown from '../../globalComponents/js/Dropdown';

// var MenuItems = [{text: 'Home', path: '/', classes: 'dropdown-item'}, {text: 'About', path: '/about', classes: 'dropdown-item'}, {text: 'Contact', path: '/contact', classes: 'dropdown-item'}];
// var ButtonComponents = {className: 'btn dropdown-toggle', type: 'button', id: 'dropdownMenuButton', dataToggle: 'dropdown', ariaHaspopup: 'true', ariaExpanded: 'false'};
// <Dropdown data="Menu" pages={MenuItems} components={ButtonComponents} />

const About = () => {
	return (
		<div>
			<Hero hero="roomsHero">
				<Banner title="About Page" subtitle="This is About Page">
					<Link to="/documentation/Introduction"><button className="btn btn-primary">Explore Documentation</button></Link>
				</Banner>
			</Hero>
			Hello from About Pages
		</div>
	)
}

export default About