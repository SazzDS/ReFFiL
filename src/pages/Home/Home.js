import React from 'react'
import PropTypes from 'prop-types'
import './Home.css';
import Dropdown from '../../globalComponents/js/Dropdown';

const Home = props => {
	return (
		<div>
			<Dropdown />
			this is home page.
		</div>
	)
}

Home.propTypes = {

}

export default Home