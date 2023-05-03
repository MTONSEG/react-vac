import React, { useState } from "react"
import { Route, Routes, } from "react-router-dom";
import './App.scss';
import { Footer } from "./components/UI/Footer/Footer.jsx";
import { Header } from "./components/UI/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";
import { CalcPage } from "./components/CalcPage/CalcPage.jsx";
import { VehicleVideos } from "./components/VehicleVideos/VehicleVideos.jsx";
import { About } from "./components/About/About.jsx";
import { LoanRates } from "./components/LoanRates/LoanRates.jsx";
import { NotFoundPage } from "./components/Page404/Page404.jsx";
import { Blog } from "./components/Blog/Blog.jsx";
import { FirstArticle } from "./components/Blog/Articles/FirstArticle.jsx";
import { SecondArticle } from "./components/Blog/Articles/SecondArticle.jsx";
import { Terms } from "./components/Terms/Terms.jsx";

export function App({ store }) {

	let [state, setState] = useState(store);


	return (
		<div className="wrapper">
			<Header logo={state.images.logo} />
			<Routes>
				<Route path="/" element={<Home
					state={state.homePage}
				/>} />
				<Route path="calc" element={<CalcPage
					state={state.calcPage}
				/>} />
				<Route path="videos" element={<VehicleVideos
					state={state.videosPage}
				/>} />
				<Route path="about" element={<About
					state={state.aboutPage}
				/>} />
				<Route path="rates" element={<LoanRates
					state={state.loanRates}
				/>} />
				<Route path="blog" element={<Blog
					state={state.blogPage}
				/>} />
				<Route path="article/1" element={<FirstArticle
					state={state.articlesPage}
				/>} />
				<Route path="article/2" element={<SecondArticle
					state={state.articlesPage}
				/>} />

				<Route path="terms" element={<Terms
					state={state.termsPolicy.terms}
				/>} />
				<Route path="*" element={
					<NotFoundPage state={state.notFoundPage} />
				} />
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