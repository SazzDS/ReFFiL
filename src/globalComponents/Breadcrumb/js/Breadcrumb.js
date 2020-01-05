import React from 'react';
import '../css/Breadcrumb.css';
const Breadcrumb = (props) => {
	return <li className={props.json.className + ' ' + props.json.status}><a href={props.json.link}>{props.json.text}</a></li>
}

export default Breadcrumb