import React from "react";
import './Home.scss';
import { EasySteps } from "./EasySteps/EasySteps.jsx";
import { HeroHome } from "./HeroHome/HeroHome.jsx";
import { HowItWork } from "./HowItWork/HowItWork.jsx";
import { Advantages } from "./Advantages/Advantages.jsx";
import { ChooseDream } from "./ChooseDream/ChooseDream.jsx";
import { HappyCustomers } from "./HappyCustomers/HappyCustomers.jsx";
import { CommentsSlider } from "./CommentsSlider/CommentsSlider.jsx";


export const Home = ({ state }) => {
	return (
		<>
			<HeroHome state={state.hero} />
			<HowItWork state={state.itwork} />
			<EasySteps state={state.easySteps} />
			<Advantages state={state.advantages} />
			<ChooseDream state={state.chooseDream} />
			<HappyCustomers state={state.happyCustomers} />
			<CommentsSlider state={state.commentsSlider}/>
		</>
	)
}