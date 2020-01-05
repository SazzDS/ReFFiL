import React from 'react'
import PropTypes from 'prop-types'
import './General.css';
import Alert from '../../../../globalComponents/Alert/js/Alert';
import Breadcrumb from '../../../../globalComponents/Breadcrumb/js/Breadcrumb';

var jsonAlert = {
	role: 'alert',
	text: 'A simple secondary alert—check it out!',
	sizeClass: 'col-md-4',
	children: 
		<button type="button" className="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
}
var styleClass = ['alert-secondary', 'alert-success', 'alert-danger', 'alert-warning', 'alert-light', 'alert-dark', 'alert-primary'];
var jsonBreadcrumb = [{
	className: 'breadcrumb-item',
	status: '',
	link: '/',
	text: 'Home'
},
{
	className: 'breadcrumb-item',
	status: '',
	link: '/About',
	text: 'About'
},
{
	className: 'breadcrumb-item',
	status: 'active',
	link: '/documentation/Introduction',
	text: 'Documentation'
}];

const General = () => {
	return (
		<div>
			<h3 className="text-center">Alert</h3>
			<div className="row">
				{styleClass.map((style, key) => {
					return <Alert key={key} json={jsonAlert} style={style} />
				})}
			</div>
			<h3 className="text-center">Breadcrumb</h3>
			<nav aria-label='breadcrumb'>
				<ol className='breadcrumb'>
					{jsonBreadcrumb.map((breadcrumb, key) => {
						return <Breadcrumb key={key} json={breadcrumb} />
					})}
				</ol>
			</nav>
		</div>
	)
}

export default General