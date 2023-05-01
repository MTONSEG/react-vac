import React, { useState } from "react";
import { Picture } from "../../UI/Picture/Picture.jsx";
import { Play } from "../../UI/Play/Play.jsx";
import './ItemVideo.scss';
import { PopupVideo } from "./PopupVideo/PopupVideo.jsx";

export const ItemVideo = props => {
	let [activeVideo, setActiveVideo] = useState(false)

	const onClickPlayHandler = () => setActiveVideo(!activeVideo);

	return (
		<>
			<li className="videos__item item-videos">
				<div className={
					activeVideo ?
						"item-videos__video-wrap active" :
						"item-videos__video-wrap"
				}>
					<Picture
						img={props.poster.img}
						webp={props.poster.webp}
						className='item-videos__poster'
					/>
					<Play
						className="item-videos__play"
						icon={props.icon}
						onClickHandler={onClickPlayHandler}
					/>
				</div>
				<h2 className="item-videos__title">{props.title}</h2>
			</li>

			<PopupVideo
				video={props.video}
				activeVideo={activeVideo}
				setActiveVideo={setActiveVideo}
				onClickPlayHandler={onClickPlayHandler}
			/>
		</>
	);
}