import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './Quiz.scss';
import { quizData } from "../../state";
import { Header } from "../UI/Header/Header";
import { ProgressQuiz } from "./ProgressQuiz/ProgressQuiz";
import { BodyQuiz } from "./BodyQuiz/BodyQuiz";
import { ContainerQuiz } from "./ContainerQuiz/ContainerQuiz";
import { AnswersQuiz } from "./BodyQuiz/AnswersQuiz/AnswersQuiz";
import { OneInputQuiz } from "./BodyQuiz/AnswersWithFormQuiz/OneInputQuiz";

export const Quiz = props => {
	let modalState = props.stateModals;

	let [state, setState] = useState(quizData);
	let [currentScreen, setCurrentScreen] = useState('budget');
	let [result, setResult] = useState({})

	useEffect(() => {
		console.log(result)
	}, [result])

	const onContinueClickHandler = (e) => {

	}
	const onBackClickHandler = () => {

	}

	const getNextEmpStep = (emp) => {
		switch (emp) {
			case 'Other':
				return 'otherIncome';
			case 'Student':
				return 'currentlyWorking'
			default:
				return 'income'
		}
	}

	const getNextReceivingStep = (emp) => {
		switch (emp) {
			case 'Student':
				return 'selfIncome';
			case 'Employed':
				return 'selfIncome'
			case 'Self-Employed':
				return 'selfIncome'
			default:
				return 'address'
		}
	}

	return (
		<>
			<Header
				mod='request'
				logo={modalState.logo}
				showMenu={modalState.showMenu}
				setShowMenu={modalState.setShowMenu}
				showRequest={modalState.showRequest}
				setShowRequest={modalState.setShowRequest}
			/>
			<ContainerQuiz>
				<ProgressQuiz
					width={10}
				/>

				<Routes>
					<Route path='/budget' element={
						<BodyQuiz
							state={state.budget}
						>
							<AnswersQuiz
								state={state.budget}
								next='employment'
								setResult={setResult}
							/>
						</BodyQuiz>
					} />
					<Route path='/employment' element={
						<BodyQuiz
							state={state.employment}
						>
							<AnswersQuiz
								state={state.employment}
								next={getNextEmpStep(result.employment)}
								prev='budget'
								result={result}
								setResult={setResult}
							/>
						</BodyQuiz>
					} />
					<Route path='/otherIncome' element={
						<BodyQuiz
							state={state.otherIncome}
						>
							<AnswersQuiz
								state={state.otherIncome}
								next='income'
								prev='employment'
								result={result}
								setResult={setResult}
							/>
						</BodyQuiz>
					} />
					<Route path='/currentlyWorking' element={
						<BodyQuiz
							state={state.currentlyWorking}
						>
							<AnswersQuiz
								state={state.currentlyWorking}
								next='longReceiving'
								prev='employment'
								result={result}
								setResult={setResult}
							/>
						</BodyQuiz>
					} />
					<Route path='/income' element={
						<BodyQuiz
							state={state.income}
						>
							<OneInputQuiz
								state={state.income}
								result={result}
								setResult={setResult}
								next='longReceiving'
								prev={result.employment === 'Other' ? 'otherIncome' : 'employment'}
							/>
						</BodyQuiz>
					} />
					<Route path='/longReceiving' element={
						<BodyQuiz
							state={state.longReceiving}
						>
							<OneInputQuiz
								state={state.longReceiving}
								result={result}
								setResult={setResult}
								next={getNextReceivingStep(result.employment)}
								prev={result.employment === 'Student' ? 'currentlyWorking' : 'income'}
							/>
						</BodyQuiz>
					} />

					<Route path='/selfIncome' element={
						<BodyQuiz
							state={state.selfIncome}
						>
							<OneInputQuiz
								state={state.selfIncome}
								result={result}
								setResult={setResult}
								next='longReceiving'
								prev={result.employment === 'Other' ? 'otherIncome' : 'employment'}
							/>
						</BodyQuiz>
					} />
				</Routes>



			</ContainerQuiz>
		</>

	)

}