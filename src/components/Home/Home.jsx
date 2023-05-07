import React from "react";
import './Home.scss';
import { Header } from "../UI/Header/Header.jsx";
import { EasySteps } from "./EasySteps/EasySteps.jsx";
import { HeroHome } from "./HeroHome/HeroHome.jsx";
import { HowItWork } from "./HowItWork/HowItWork.jsx";
import { Advantages } from "./Advantages/Advantages.jsx";
import { ChooseDream } from "./ChooseDream/ChooseDream.jsx";
import { HappyCustomers } from "./HappyCustomers/HappyCustomers.jsx";
import { CommentsSlider } from "./CommentsSlider/CommentsSlider.jsx";
import { Calculator } from "./Calculator/Calculator.jsx";
import { InterestingRead } from "./InterestingRead/InterestingRead.jsx";


export const Home = ({ state, ...props }) => {

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
			<HeroHome state={state.hero} />
			<HowItWork state={state.itwork} />
			<EasySteps state={state.easySteps} />
			<Advantages state={state.advantages} />
			<ChooseDream state={state.chooseDream} />
			<HappyCustomers state={state.happyCustomers} />
			<CommentsSlider state={state.commentsSlider} />
			<Calculator state={state.calculator} />
			<InterestingRead state={state.interesting} />
		</>
	)
}