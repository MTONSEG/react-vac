import React, { useState } from "react";
import './CatalogFilter.scss';
import { BodyTypeFilter } from "./FilterAccordions/BodyTypeFilter.jsx";
import { MakeModelFilter } from "./FilterAccordions/MakeModelFilter.jsx";
import { TransmissionFilter } from "./FilterAccordions/TransmissionFilter.jsx";

export const CatalogFilter = ({ state, ...props }) => {

	return (
		<div className={`${props.className} filter-catalog`}>
			<h1 className="filter-catalog__title">
				{state.title}
			</h1>
			<div className="filter-catalog__accordion">
				<MakeModelFilter
					icon={state.iconArr}
					search={state.iconSearch}
					state={state.makeModel}
				/>
				<BodyTypeFilter
					icon={state.iconArr}
					state={state.bodyType}
				/>
				<TransmissionFilter
					icon={state.iconArr}
					title={state.transmission.title}
				/>
				{/* <MakeModelFilter
					icon={state.iconArr}
					state={state.makeModel}
				/>
				<MakeModelFilter
					icon={state.iconArr}
					state={state.makeModel}
				/>
				<MakeModelFilter
					icon={state.iconArr}
					state={state.makeModel}
				/> */}
			</div>
		</div>
	);
}