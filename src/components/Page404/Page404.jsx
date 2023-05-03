import React from "react";
import { Link } from "react-router-dom";
import './Page404.scss';

export const NotFoundPage = ({ state }) => (
	<div className="not-found-page">
		<div className="not-found-page__body">
			<img className="not-found-page__icon" src={state.icon} alt="" />
			<h1 className="not-found-page__title title">
				{state.title}
			</h1>
			<p className="not-found-page__text text">
				{state.text}
			</p>
			<Link className="not-found-page__btn" to='/'>
				{state.titleBtn}
			</Link>
		</div>
	</div>
)