import React, { useState } from "react";
import './Catalog.scss';
import { CatalogFilter } from "./CatalogFilter/CatalogFilter.jsx";
import { CatalogBody } from "./CatalogBody/CatalogBody.jsx";

export const Catalog = ({ state }) => {

	let [activeFilter, setActiveFilter] = useState(false);

	const handleActiveFilterClick = () => { setActiveFilter(!activeFilter) }

	return (
		<div className="catalog">
			<div className="container">
				<div className="catalog__row">
					<CatalogFilter
						state={state.filter}
						className="catalog__filter"
						activeFilter={activeFilter}
						onClickHandler={handleActiveFilterClick}
					/>
					<CatalogBody
						state={state.body}
						className="catalog__body"
						onClickHandler={handleActiveFilterClick}
					/>
				</div>
			</div>
		</div>
	);
}