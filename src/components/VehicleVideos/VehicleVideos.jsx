import React, { useState } from "react";
// import { Picture } from "../UI/Picture/Picture.jsx";
// import { Play } from "../UI/Play/Play.jsx";
import { TitlePages } from "../UI/TitlePages/TitlePages.jsx";
import { ItemVideo } from "./ItemVideo/ItemVideo.jsx";
import './VehicleVideos.scss';

export const VehicleVideos = ({ state }) => {
	
	let listVideos = state.list.map(el => (
		<ItemVideo
			key={el.id}
			poster={el.poster}
			video={el.video}
			icon={state.icon}
			title={el.title}
		/>
	))

	return (
		<>
			<TitlePages title={state.bigTitle} />
			<div className="videos">
				<div className="container">
					<ul className="videos__list">
						{listVideos}
					</ul>
				</div>
			</div>
		</>
	);
}