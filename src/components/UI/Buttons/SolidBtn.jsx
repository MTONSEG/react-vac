import React from "react";
import './Buttons.scss';

export const SolidBtn = props => {
	let style = props.className ? (' ' + props.className) : '';

	return (
		<button
			href="#"
			className={'btn btn_solid' + style}
			onClick={e => { e.preventDefault() }}
		>
			{props.title}
		</button>
	)
};