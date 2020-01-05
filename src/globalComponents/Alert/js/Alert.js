import React from 'react';

const Alert = (props) => {
	return (
		<div className={props.json.role + ' ' + props.style  + ' ' + props.json.sizeClass } role={props.json.role}>
			{props.json.text}
			{props.json.children}
		</div>
	)
}

export default Alert