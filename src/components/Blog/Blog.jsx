import React from "react";
import './Blog.scss';
import { TitlePages } from "../UI/TitlePages/TitlePages.jsx";
import { ItemSliderInteresting } from "../Home/InterestingRead/SliderInteresting/ItemSliderInteresting/ItemSliderInteresting.jsx";

export const Blog = ({ state }) => {
	let itemsList = state.list.map(el => (
		<ItemSliderInteresting
			key={el.id}
			link={el.link}
			img={el.image.img}
			webp={el.image.wbp}
			date={el.date}
			title={el.title}
		/>
	))

	return (
		<>
			<TitlePages
				title={state.bigTitle}
				className='blog__big-title'
			/>
			<div className="blog">
				<div className="container">
					<div className="blog__list">
						{itemsList}
					</div>
				</div>
			</div>
		</>
	)
}