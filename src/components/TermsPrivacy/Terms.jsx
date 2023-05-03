import React from "react";
import { Accordion } from "../UI/Accordion/Accordion.jsx";
import { TitlePages } from "../UI/TitlePages/TitlePages.jsx";
import './Terms.scss';

export const Terms = ({ state }) => (
	<>
		<TitlePages title={state.bigTitle} />
		<div className="terms">
			<Accordion state={state} />
		</div>
	</>
)