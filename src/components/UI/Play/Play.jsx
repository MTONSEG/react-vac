import React from "react";
import './Play.scss';

export const Play = props => {
	return (
		<button className={
			props.className ?
				`${props.className} play` : "play"}
			onClick={props.onClickHandler}
		>
			<img src={props.icon} alt="play" />
		</button>
	);
}