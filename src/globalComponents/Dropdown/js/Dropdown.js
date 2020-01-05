import React from 'react';
import DropdownItems from './DropdownItems';
import DropdownCode from '../json/DropdownCode';
import IndexCode from '../json/IndexCode';
// import $ from 'jquery';

// function actionDropdown() {
// 	// $('.dropdown-toggle').dropdown();
// }

const xmpStyle = {
      color: "#f2d123",
      backgroundColor: "#333",
      padding: "10px 50px",
      fontFamily: "Arial",
      width: '100%',
      minWidth: '100%',
      maxWidth: '100%'
    };
var buttons = ['btn-default', 'btn-primary', 'btn-secondary', 'btn-info', 'btn-warning', 'btn-danger'];

const Dropdown = (props) => {
	return (
		<div className="col-12 col-sm-12 col-md-12">
			<div className="row">
				<div className="col-12 col-sm-10 col-md-9">
					<h3> File Name : Dropdown.js </h3>
					<xmp style={xmpStyle}>
						<pre className="editor editor-colors">
							<code className='HTML'>
								<DropdownCode />
							</code>
						</pre>
					</xmp>
					<h3> File Name : index.js (Main) </h3>
					<xmp style={xmpStyle}>
						<pre className="editor editor-colors">
							<code className='HTML'>
								<IndexCode />
							</code>
						</pre>
					</xmp>
				</div>
				<div className="col-12 col-sm-2 col-md-3">
					<h3> Dropdown Example </h3>
					<div className="row">
						{buttons.map((buttonType, j)=>{
							var tempButtonComponents = props.components;
							tempButtonComponents.className = props.components.className + ' ' + buttonType;
							return (
								<div key={(j+1)} className="col-md-12 dropdown">
									<button 
									className={tempButtonComponents.className} 
									type={tempButtonComponents.type} 
									id={tempButtonComponents.id} 
									data-toggle={tempButtonComponents.dataToggle} 
									aria-haspopup={tempButtonComponents.ariaHaspopup} 
									aria-expanded={tempButtonComponents.ariaExpanded}>
										{props.data}
									</button>
									<DropdownItems pages={props.pages} />
									<p><label> use class {buttonType} to apply {buttonType.split('btn-').join('')} style of dropdown button. </label></p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dropdown


