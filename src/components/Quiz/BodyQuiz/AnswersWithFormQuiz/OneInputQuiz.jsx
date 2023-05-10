import React, { useState } from "react";
import '../../Quiz.scss';
import { InputQuiz } from "./InputQuiz/InputQuiz";
import { ContinueQuizBtn } from "../../../UI/Buttons/ContinueQuizBtn/ContinueQuizBtn";
import { BackQuizBtn } from "../../../UI/Buttons/BackQuizBtn/BackQuizBtn";

export const OneInputQuiz = ({ result, setResult, ...props }) => {

	let [value, setValue] = useState('');
	const onContinueClick = () => {
		setResult({ ...result, [props.state.name]: value });
		setValue('');
	}
	return (
		<>
			<div className="form-quiz">
				<InputQuiz
					value={value}
					setValue={setValue}
					placeholder={props.state.ph[1]}
					name={props.state.name}
				/>
			</div>
			<div className="buttons-quiz">
				<ContinueQuizBtn
					className="buttons-quiz__continue"
					next={props.next}
					onContinueClick={onContinueClick} />
				{
					props.prev
						? <BackQuizBtn
							className="buttons-quiz__back"
							prev={props.prev}
							onBackClick={props.onBackClick} />
						: <></>
				}
			</div>
		</>
	)

}