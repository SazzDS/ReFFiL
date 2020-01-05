import React from 'react'
import PropTypes from 'prop-types'
import './Home.css';
import Hero from '../../globalComponents/Hero/js/Hero';
import Banner from '../../globalComponents/Banner/js/Banner';
import {Link} from 'react-router-dom';

// import Dropdown from '../../globalComponents/js/Dropdown';

// var MenuItems = [{text: 'Home', path: '/', classes: 'dropdown-item'}, {text: 'About', path: '/about', classes: 'dropdown-item'}, {text: 'Contact', path: '/contact', classes: 'dropdown-item'}];
// var ButtonComponents = {className: 'btn dropdown-toggle', type: 'button', id: 'dropdownMenuButton', dataToggle: 'dropdown', ariaHaspopup: 'true', ariaExpanded: 'false'};
// <Dropdown data="Menu" pages={MenuItems} components={ButtonComponents} />

const Home = () => {
	return (
		<div>
			<Hero hero="roomsHero">
				<Banner title="Home Page" subtitle="This is Home Page">
					<Link to="/Documentation/getStarted/"><button className="btn btn-primary">Explore Documentation</button></Link>
					&nbsp;
					<Link to="/about"><button className="btn btn-primary">Explore About Us</button></Link>
				</Banner>
			</Hero>
			Hello from Home Pages
		</div>
	)
}

export default Home