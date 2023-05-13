import React, { useState } from "react"
import { Route, Routes, } from "react-router-dom";
import './App.scss';
import { Footer } from "./components/UI/Footer/Footer.jsx";
import { Home } from "./components/Home/Home.jsx";
// import { CalcPage } from "./components/CalcPage/CalcPage.jsx";
// import { VehicleVideos } from "./components/VehicleVideos/VehicleVideos.jsx";
// import { About } from "./components/About/About.jsx";
// import { LoanRates } from "./components/LoanRates/LoanRates.jsx";
// import { NotFoundPage } from "./components/Page404/Page404.jsx";
// import { Blog } from "./components/Blog/Blog.jsx";
// import { FirstArticle } from "./components/Blog/Articles/FirstArticle.jsx";
// import { SecondArticle } from "./components/Blog/Articles/SecondArticle.jsx";
// import { Terms } from "./components/TermsPrivacy/Terms.jsx";
// import { Privacy } from "./components/TermsPrivacy/Privacy.jsx";
import { MenuModal } from "./components/UI/Modals/MenuModal.jsx";
import { ContactModal } from "./components/UI/Modals/ContactModal.jsx";
// import { Catalog } from "./components/Catalog/Catalog.jsx";
// import { CarPage } from "./components/Catalog/CarPage/CarPage.jsx";
// import { Quiz } from "./components/Quiz/Quiz.jsx";

export function App({ store }) {

	let [state, setState] = useState(store);
	let [showMenu, setShowMenu] = useState(false);
	let [showRequest, setShowRequest] = useState(false);

	let showModals = {
		showMenu: showMenu,
		setShowMenu: setShowMenu,
		showRequest: showRequest,
		setShowRequest: setShowRequest,
		logo: state.images.logo
	}

	return (
		<div className="wrapper">

			<Routes>
				<Route path="/" element={<Home
					state={state.homePage}
					stateModals={showModals}
				/>} />
				{/* <Route path="/calc" element={<CalcPage
					state={state.calcPage}
					stateModals={showModals}
				/>} />
				<Route path="/videos" element={<VehicleVideos
					state={state.videosPage}
					stateModals={showModals}
				/>} />
				<Route path="/about" element={<About
					state={state.aboutPage}
					stateModals={showModals}
				/>} />
				<Route path="/rates" element={<LoanRates
					state={state.loanRates}
					stateModals={showModals}
				/>} />
				<Route path="/blog" element={<Blog
					state={state.blogPage}
					stateModals={showModals}
				/>} />
				<Route path="/article/1" element={<FirstArticle
					state={state.articlesPage}
					stateModals={showModals}
				/>} />
				<Route path="/article/2" element={<SecondArticle
					state={state.articlesPage}
					stateModals={showModals}
				/>} />
				<Route path="/terms" element={<Terms
					state={state.termsPolicy.terms}
					stateModals={showModals}
				/>} />
				<Route path="/privacy" element={<Privacy
					state={state.termsPolicy.privacy}
					stateModals={showModals}
				/>} />
				<Route path="/catalog" element={<Catalog
					state={state.catalogPage}
					stateModals={showModals}
				/>} />
				<Route path="/card" element={<CarPage
					state={state.carPage}
					stateModals={showModals}
				/>} />
				<Route path={'/quiz/*'} element={<Quiz
					stateModals={showModals}
				/>} />
				<Route path="*" element={
					<NotFoundPage state={state.notFoundPage} />
				} /> */}
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

			<MenuModal
				state={state.modals}
				showMenu={showMenu}
				setShowMenu={setShowMenu}
			/>
			<ContactModal
				state={state.modals}
				showMenu={showRequest}
				setShowMenu={setShowRequest}
			/>
		</div>
	)
}