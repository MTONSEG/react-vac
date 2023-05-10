import React from "react";
import { HeadQuiz } from "../HeadQuiz/HeadQuiz";
import '../Quiz.scss';

export const BodyQuiz = ({ state, children, ...props }) => {


	return (
		<>
			<HeadQuiz
				question={state.question}
				text={state.text}
			/>

			{children}

			
		</>

	)

}