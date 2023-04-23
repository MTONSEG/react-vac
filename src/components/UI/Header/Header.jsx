import React from "react";
import { LinerBtn } from "../Buttons/LinerBtn.jsx";
import { MenuBtn } from "../Buttons/MenuBtn.jsx";
import { SolidBtn } from "../Buttons/SolidBtn.jsx";
import './Header.scss';

export const Header = props => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<img className="header__logo" src={props.logo} alt="logo"/>

					<div className="header__right">
						<div className="header__buttons">
							<LinerBtn title="Inventory" className="header__inventory-btn" />
							<SolidBtn title="Request a car" className="header__request-btn" />
						</div>

						<MenuBtn />
					</div>
				</div>
			</div>
		</header>
	)
};