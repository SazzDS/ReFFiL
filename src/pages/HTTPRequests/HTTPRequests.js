import React from 'react'
import PropTypes from 'prop-types'
import './HTTPRequests.css';
import Hero from '../../globalComponents/Hero/js/Hero';
import Banner from '../../globalComponents/Banner/js/Banner';
import {Link} from 'react-router-dom';
import GETSection from './section/GET/GET';
import POSTSection from './section/POST/POST';
import ErrorSection from '../ErrorPage/ErrorPage';

const HTTPRequests = () => {
	var dir = window.location.pathname;
	if(dir.split('/').pop() === 'Home') {
		var tempElement = ''
	} else {
		if(dir.split('/').pop() === 'GET') {
			var tempElement = <GETSection />
		} else if(dir.split('/').pop() === 'POST') {
			var tempElement = <POSTSection />
		} else {
			var tempElement = <ErrorSection />
		}
	}
	return (
		<div>
			<Hero hero="roomsHero">
				<Banner title="HTTPRequests Page" subtitle="This is HTTPRequests Page">
					<Link to="/documentation/Introduction"><button className="btn btn-primary">Explore Documentation</button></Link>
				</Banner>
			</Hero>
			<Link to="GET"><button className="btn btn-primary">HTTP GET Request</button></Link>
			<Link to="POST"><button className="btn btn-primary">HTTP POST Request</button></Link>
			{tempElement}
		</div>
	)
}

export default HTTPRequests