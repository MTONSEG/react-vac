import React from "react";
import { Header } from "../UI/Header/Header.jsx";
import { Calculator } from "../Home/Calculator/Calculator.jsx";
import { TitlePages } from "../UI/TitlePages/TitlePages.jsx";
import './CalcPage.scss';

export const CalcPage = ({ state, ...props }) => {

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
			<Calculator
				state={state}
				className="calc-page-margin"
			/>
		</>
	);
}