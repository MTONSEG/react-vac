import React from "react"
import { Route, Routes } from "react-router-dom";
import './App.scss';
import { Footer } from "./components/UI/Footer/Footer.jsx";
import { Header } from "./components/UI/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";

export function App({ state }) {
	return (
		<div className="wrapper">
			<Header logo={state.images.logo} />

			<Routes>
				<Route path="/" element={
					<Home state={state.homePage} />}
				/>

				{/* <Route path="/calculator" element={
					<Calculator />}
				/>

				<Route path="/videos" element={
					<VehicleVideos />}
				/>

				<Route path="/about" element={
					<About />}
				/>

				<Route path="/rates" element={
					<LoanRates />}
				/>

				<Route path="/terms" element={
					<Terms />}
				/>
				<Route path="/privacy" element={
					<Privacy />}
				/> */}
			</Routes>

			<Footer />
		</div>
	)
}