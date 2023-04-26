import React from "react";
import { Picture } from "../../../../UI/Picture/Picture.jsx";
import './ItemSliderInteresting.scss';

export const ItemSliderInteresting = props => {
	return (
		<div className="item-interesting">
			<div className="item-interesting__image-wrap">
				<Picture
					img={props.img}
					webp={props.webp}
					className="item-interesting__image"
				/>
			</div>
			<div className="item-interesting__body">
				<p className="item-interesting__date text">
					{props.date}
				</p>
				<h2 className="item-interesting__title">
					{props.title}
				</h2>
			</div>
		</div>
	)
}