import React from "react";
import { CardBodyCatalog } from "./CardBodyCatalog/CardBodyCatalog.jsx";
import './CatalogBody.scss';
import Masonry from '@mui/lab/Masonry';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 993,
			lg: 1221,
			xl: 1681,
		},
	},
});


export const CatalogBody = ({ state, ...props }) => {
	let cardList = state.list.map(el => (
		<CardBodyCatalog
			key={el.id}
			image={el.image}
			price={el.price}
			title={el.title}
			year={el.year}
			bodyType={el.bodyType}
			transmission={el.transmission}
			mileage={el.mileage}
		/>
	))

	const breakpointCols = {
		xs: 1,
		sm: 2,
		md: 2,
		lg: 2,
		xl: 2,
	};

	return (
		<div className={`${props.className} body-catalog`}>
			<div className="body-catalog__head"></div>
			<ThemeProvider theme={theme}>
				<Masonry
					columns={breakpointCols}
					spacing={2}>
					{cardList}
				</Masonry>
			</ThemeProvider>
		</div>
	);
}