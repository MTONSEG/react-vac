import React from "react";
import { InterestingRead } from "../../Home/InterestingRead/InterestingRead.jsx";
import './Articles.scss';

export const FirstArticle = ({ state }) => {
	let data = state.first;
	return (
		<div className="article">
			<div className="article__header"></div>
			<div className="container">
				<article className="article__body">
					<p className="article__date text">
						{data.date}
					</p>
					<h1 className="article__title title">
						{data.title}
					</h1>
					<div className="article__text-wrap">
						<p className="article__text text">
							{data.text[0]}
						</p>
						<p className="article__text text">
							{data.text[1]}
						</p>
					</div>
				</article>
				<div className="article__slider">
					<InterestingRead
						state={state.interesting}
					/>
				</div>
			</div>
		</div>
	)
}