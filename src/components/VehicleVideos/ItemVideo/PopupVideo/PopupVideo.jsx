import React, {useEffect} from "react";
import './PopupVideo.scss';

export const PopupVideo = props => {

	useEffect(() => {
		document.body.style.overflow = props.activeVideo ? 'hidden' : 'auto';
	}, [props.activeVideo])

	return (
		<div className={
			props.activeVideo ?
				"popup-video active" : "popup-video"}
			onClick={props.onClickPlayHandler}
		>
			<button className="popup-video__close-btn">
				<img src="" alt="" />
			</button>
			<div className={
				props.activeVideo ?
					"popup-video__wrap active" : "popup-video__wrap"}
				onClick={e => { e.stopPropagation() }}
			>
				<iframe
					src={props.video}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					loading="lazy"></iframe>
			</div>
		</div>
	);
}