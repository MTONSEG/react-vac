import React from "react";
import './Catalog.scss';
import { CatalogFilter } from "./CatalogFilter/CatalogFilter.jsx";
import { CatalogBody } from "./CatalogBody/CatalogBody.jsx";

export const Catalog = ({ state }) => {
	return (
		<div className="catalog">
			<div className="container">
				<div className="catalog__row">
					<CatalogFilter
						state={state.filter}
						className="catalog__filter" />
					<CatalogBody
						state={state.body}
						className="catalog__body" />
				</div>
			</div>
		</div>
	);
}