import React from 'react';

const CollapseBox = (props) => {
	return (
		<div>
			<div className={props.json.parentClassName} id={props.json.parentId}>
				<button className={props.json.parentButtonClassName} type={props.json.parentButtonClassName} data-toggle={props.json.parentButtonDataToggle} data-target={"#"+props.json.childId} aria-expanded={props.json.parentButtonAriaExpanded} aria-controls={props.json.parentButtonAriaControls}>
					{props.json.parentButtonData}
				</button>
				<div className="card">
					<div id={props.json.childId} className={props.json.childClassName} aria-labelledby={props.json.childAriaLabelledBy} data-parent={"#"+props.json.parentId}>
						<div className="card-body">
							{props.json.childData}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CollapseBox