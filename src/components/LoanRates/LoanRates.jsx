import React from "react";
import './LoanRates.scss';
import { TitlePages } from "../UI/TitlePages/TitlePages.jsx";
import { MissionAbout } from "../About/MissionAbout/MissionAbout.jsx";
import { TermsLoanRates } from "./TermsLoanRates/TermsLoanRates.jsx";
import { BenefitsLoanRates } from "./BenefitsLoanRates/BenefitsLoanRates.jsx";
import { Calculator } from "../Home/Calculator/Calculator.jsx";

export const LoanRates = ({ state }) => {
	return (
		<>
			<TitlePages title={state.bigTitle} />
			<div className="loan-rates">
				<div className="container">
					<div className="loan-rates__credit">
						<MissionAbout state={state.credit} />
					</div>
					<div className="loan-rates__terms">
						<TermsLoanRates state={state.termsRates}/>
					</div>
					<div className="loan-rates__benefits">
						<BenefitsLoanRates state={state.benefits}/>
					</div>
					<div className="loan-rates__calc">
						<Calculator state={state.calculator}/>
					</div>
				</div>
			</div>
		</>
	)
}