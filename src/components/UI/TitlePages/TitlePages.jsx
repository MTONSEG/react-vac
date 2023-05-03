import React from "react";
import './TitlePages.scss';

export const TitlePages = props => {
	return (
		<div className={
			props.className ?
				`${props.className} header-pages` : "header-pages"
		}>
			<div className="container">
				<h1 className="header-pages__title big-title">
					{props.title}
				</h1>
			</div>
		</div>
	)
};