import React from "react";
import './About.scss';
import { TitlePages } from "../UI/TitlePages/TitlePages.jsx";
import { MissionAbout } from "./MissionAbout/MissionAbout.jsx";
import { DreamCarAbout } from "./DreamCarAbout/DreamCarAbout.jsx";
import { TransparencyAbout } from "./TransparencyAbout/TransparencyAbout.jsx";
import { BestPricesAbout } from "./BestPricesAbout/BestPricesAbout.jsx";
import { QualifiedAgentsAbout } from "./QualifiedAgentsAbout/QualifiedAgentsAbout.jsx";
import { CommentsSlider } from "../Home/CommentsSlider/CommentsSlider.jsx";
import { DynamicTeamAbout } from "./DynamicTeamAbout/DynamicTeamAbout.jsx";
import { FeaturesAbout } from "./FeaturesAbout/FeaturesAbout.jsx";
import { Calculator } from "../Home/Calculator/Calculator.jsx";
import { Header } from "../UI/Header/Header.jsx";

export const About = ({ state, ...props }) => {

	let modalState = props.stateModals;

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
			<div className="about">
				<div className="container">
					<div className="about__mission">
						<MissionAbout state={state.mission} />
					</div>
					<div className="about__dream-car">
						<DreamCarAbout
							state={state.dreamCar}
						/>
					</div>
					<div className="about__transparency">
						<TransparencyAbout state={state.transparency} />
					</div>
					<div className="about__best-prices">
						<BestPricesAbout state={state.bestPrices} />
					</div>
					<div className="about__qualified-agents">
						<QualifiedAgentsAbout state={state.qualifiedAgents} />
					</div>
					<div className="about__comments">
						<CommentsSlider state={state.commentsSlider} />
					</div>
					<div className="about__dynamic-team">
						<DynamicTeamAbout state={state.dynamicTeam} />
					</div>
					<div className="about__features">
						<FeaturesAbout state={state.features} />
					</div>
					<div className="about__calculator">
						<Calculator state={state.calculator} />
					</div>
				</div>
			</div>
		</>
	)
}