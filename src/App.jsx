import React, { useState } from "react"
import { Route, Routes, } from "react-router-dom";
import './App.scss';
import { Footer } from "./components/UI/Footer/Footer.jsx";
import { Header } from "./components/UI/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";
import { CalcPage } from "./components/CalcPage/CalcPage.jsx";

export function App({ store }) {

	let [state, setState] = useState(store);


	return (
		<div className="wrapper">
			<Header logo={state.images.logo} />
			<Routes>
				<Route path="/" element={<Home state={state.homePage} />} />
				<Route path="calc" element={<CalcPage state={state.calcPage} />} />
				<Route path="*" element={<p>this page is not</p>} />
			</Routes>
			<Footer images={
				{
					logo: state.images.logoFooter,
					icon: state.images.logoCompany,
					instagram: state.images.iconInstagram,
					facebook: state.images.iconFacebook,
					youtube: state.images.iconYoutube,
				}
			} />
		</div>
	)
}