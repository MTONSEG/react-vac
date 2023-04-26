import React from "react";
import './Footer.scss';

export const Footer = ({ images }) => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__row">
					<img loading="lazy" src={images.logo} alt="" className="footer__logo" />
					<ul className="footer__list-links">
						<li className="footer__link">Terms</li>
						<li className="footer__link">Privacy</li>
					</ul>
					<div className="footer__soc">
						<a className="footer__soc-link" href="#">
							<img loading="lazy" src={images.instagram} alt="" className="footer__soc-instagram" />
						</a>

						<a className="footer__soc-link" href="#">
							<img loading="lazy" src={images.facebook} alt="" className="footer__soc-instagram" />
						</a>

						<a className="footer__soc-link" href="#">
							<img loading="lazy" src={images.youtube} alt="" className="footer__soc-instagram" />
						</a>
					</div>
					<div className="footer__created">
						<p className="footer__created-text">
							Created by
						</p>
						<img loading="lazy" src={images.icon} alt="" className="footer__created-icon" />
					</div>
					<p className="footer__copy">
						©Copyright, 2020. Vehicle Approval
					</p>
				</div>
			</div>
		</footer>
	)
};