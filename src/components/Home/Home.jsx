import React from "react";
import { HeroHome } from "./HeroHome/HeroHome.jsx";
import { HowItWork } from "./HowItWork/HowItWork.jsx";

export const Home = ({ state }) => {
	return (
		<>
			<HeroHome state={state.hero} />
			<HowItWork state={state.itwork} />
		</>
	)
}