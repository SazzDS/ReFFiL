import React from 'react'
import Collapse from '../../Collapse/js/CollapseBox'

var childData = "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.";
var json = [{
	parentClassName : 'accordion',
	parentId : 'accordion',
	parentButtonClassName : 'btn btn-secondary btn-block',
	parentButtonType : 'button',
	parentButtonDataToggle : 'collapse',
	parentButtonAriaExpanded : 'true',
	parentButtonAriaControls : 'collapseOne',
	parentButtonData : 'Click to Collapse 1',
	childId : 'collapseOne',
	childClassName : 'collapse show',
	childAriaLabelledBy : 'headingOne',
	childData : childData,
},
{
	parentClassName : 'accordion',
	parentId : 'accordion',
	parentButtonClassName : 'btn btn-secondary btn-block',
	parentButtonType : 'button',
	parentButtonDataToggle : 'collapse',
	parentButtonAriaExpanded : 'true',
	parentButtonAriaControls : 'collapseTwo',
	parentButtonData : 'Click to Collapse 2',
	childId : 'collapseTwo',
	childClassName : 'collapse show',
	childAriaLabelledBy : 'headingTwo',
	childData : childData,
},
{
	parentClassName : 'accordion',
	parentId : 'accordion',
	parentButtonClassName : 'btn btn-secondary btn-block',
	parentButtonType : 'button',
	parentButtonDataToggle : 'collapse',
	parentButtonAriaExpanded : 'true',
	parentButtonAriaControls : 'collapseThree',
	parentButtonData : 'Click to Collapse 3',
	childId : 'collapseThree',
	childClassName : 'collapse show',
	childAriaLabelledBy : 'headingThree',
	childData : childData,
}];

const AccordionBox = () => {
	return (
		<div>
			<Collapse json={json[0]} />
			<Collapse json={json[1]} />
			<Collapse json={json[2]} />
		</div>
	)
}

export default AccordionBox