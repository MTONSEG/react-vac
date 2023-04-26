import React, { useState } from "react";
import './Calculator.scss';
import { PaymentRange } from "./PaymentRange/PaymentRange.jsx";
import { RangeCalculate } from "./RangeCalculate/RangeCalculate.jsx";


export const Calculator = ({ state }) => {

	let [loanAmount, setLoanAmount] = useState(state.loanAmount.default);
	let [loanDuration, setLoanDuration] = useState(state.loanDuration.default)

	return (
		<div className="calculator">
			<div className="container">
				<div className="calculator__head">
					<h1 className="calculator__title title">
						{state.title}
					</h1>
					<p className="calculator__text text">
						{state.text}
					</p>
				</div>
				<div className="calculator__body">
					<RangeCalculate
						className="calculator__range"
						state={state}
						loanAmount={loanAmount}
						setLoanAmount={setLoanAmount}
						loanDuration={loanDuration}
						setLoanDuration={setLoanDuration}
					/>
					<PaymentRange
						className="calculator__payment"
						state={state.payments}
					/>
				</div>
			</div>
		</div>
	)
}