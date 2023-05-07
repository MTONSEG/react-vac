import React, { useState } from "react";
import { TitlePages } from "../UI/TitlePages/TitlePages.jsx";
import { ItemVideo } from "./ItemVideo/ItemVideo.jsx";
import { Header } from "../UI/Header/Header.jsx";
import './VehicleVideos.scss';

export const VehicleVideos = ({ state, ...props }) => {
	let modalState = props.stateModals;

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
			<Header
				logo={modalState.logo}
				showMenu={modalState.showMenu}
				setShowMenu={modalState.setShowMenu}
				showRequest={modalState.showRequest}
				setShowRequest={modalState.setShowRequest}
			/>
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