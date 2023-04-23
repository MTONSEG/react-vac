import React from "react";
import './Buttons.scss';

export const MenuBtn = props => {
	let style = props.className ? ` ${props.className}` : '';

	return (
		<div className="btn-menu">
			<span className="btn-menu__line"></span>
		</div>
	)
};