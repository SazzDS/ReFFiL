import React from 'react'

const DropdownItems = (props) => {
	return (
		<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			{props.pages.map((item, i)=>{
				return(
					<a key={i} className={item.classes} href={item.path}>{item.text}</a>
				)
			})}
		</div>
	)
}

export default DropdownItems