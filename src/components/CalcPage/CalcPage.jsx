import React from "react";
import { Calculator } from "../Home/Calculator/Calculator.jsx";
import { TitlePages } from "../UI/TitlePages/TitlePages.jsx";
import './CalcPage.scss';

export const CalcPage = ({ state }) => {
	return (
		<>
			<TitlePages title={state.bigTitle} />
			<Calculator
				state={state}
				className="calc-page-margin"
			/>
		</>
	);
}