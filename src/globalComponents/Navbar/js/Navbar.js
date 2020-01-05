import React, {Component} from 'react';
import logo from '../../../images/logo.png';
import  '../css/Navbar.css';
import {FaCartArrowDown} from 'react-icons/fa';
import {
	Link, 
	useParams
} from 'react-router-dom';

export default class Navbar extends React.Component {
	state = {
		navbarOpen : false,
		css : 'collapse navbar-collapse',
		links : [
		{
			id: 1,
			path: '/',
			text: 'Home',
			documentation: '',
		},
		{
			id: 2,
			path: '/about',
			text: 'About',
			documentation: '',
		},
		{
			id: 3,
			path: '/Introduction',
			text: 'Introduction',
			documentation: '/documentation',
		},
		{
			id: 4,
			path: '/Dropdown',
			text: 'Dropdown',
			documentation: '/documentation',
		},
		{
			id: 5,
			path: '/Collapse',
			text: 'Collapse',
			documentation: '/documentation',
		},
		]
	}

	navbarHandler = () => {
		this.state.navbarOpen?this.setState({navbarOpen:false, css: "collapse navbar-collapse"}):this.setState({navbarOpen:true, css: "collapse navbar-collapse show"})
	};


	render() {
		return <nav className="navbar navbar-expand-sm bg-light navbar-light">
			<Link to="/" className="navbar-brand">
			<img src={logo} alt="logo" />
			</Link>
			<button className="navbar-toggler"
			 type="button" 
			 onClick={this.navbarHandler}
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className={this.state.css}>
			<ul className="navbar-nav max-auto">
			{this.state.links.map(link => {
				return (
				<li key={link.id} className="nav-item">
				<Link to={link.documentation + link.path} className="nav-link text-capitalize">
				{link.text}
				</Link>
				</li>
				)
			})}
			<li className="nav-item ml-sm-5">
				<FaCartArrowDown className="cart-icon text-yellow" />
			</li>
			</ul>
			</div>
		</nav>;
	}
}
