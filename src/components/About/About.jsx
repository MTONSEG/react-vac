import React from "react";
import './About.scss';
import { TitlePages } from "../UI/TitlePages/TitlePages.jsx";
import { MissionAbout } from "./MissionAbout/MissionAbout.jsx";
import { DreamCarAbout } from "./DreamCarAbout/DreamCarAbout.jsx";
import { TransparencyAbout } from "./TransparencyAbout/TransparencyAbout.jsx";

export const About = ({ state }) => {
	return (
		<>
			<TitlePages title={state.bigTitle} />
			<div className="about">
				<div className="container">
					<div className="about__mission">
						<MissionAbout state={state.mission}/>
					</div>
					<div className="about__dream-car">
						<DreamCarAbout
							state={state.dreamCar}
						/>
					</div>
					<div className="about__transparency">
						<TransparencyAbout state={state.transparency}/>
					</div>
					<div className="about__best-prices"></div>
				</div>
			</div>
		</>
	)
}