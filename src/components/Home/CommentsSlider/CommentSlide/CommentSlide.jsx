import React from "react";
import { Picture } from "../../../UI/Picture/Picture.jsx";
import './CommentSlide.scss';



export const CommentSlide = props => {

	return (
		<div className="slide-comments">
			<div className="slide-comments__image-wrap">
				<Picture
					img={props.img}
					webp={props.webp}
					className="slide-comments__image"
				/>
			</div>
			<div className="slide-comments__body">
				<p className="slide-comments__name text">
					{props.name}
				</p>
				<p className="slide-comments__comment">
					{props.comment}
				</p>
			</div>
		</div>
	)
}