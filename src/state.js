import React, { useState } from 'react';
import { v1 as uuidv1, v1 } from 'uuid';
import logo from './assets/icons/logo.svg';
import logoFooter from './assets/icons/logo_footer.svg';
//hero slider images 
import carSuv from './assets/images/home_suv.png';
import carSuvWebp from './assets/images/home_suv.png?as=webp';
import carRam from './assets/images/home_ram.png';
import carRamWebp from './assets/images/home_ram.png?as=webp';
import carSedan from './assets/images/home_sedan.png';
import carSedanWebp from './assets/images/home_sedan.png?as=webp';
import carVan from './assets/images/home_van.png';
import carVanWebp from './assets/images/home_van.png?as=webp';
import iconBtn from './assets/icons/hero_arr-left.svg';
//it-work images//
import img1ItWork from './assets/images/home_accord.png';
import img1ItWorkWebp from './assets/images/home_accord.png?as=webp';
import img21ItWork from './assets/images/home_lexus.png';
import img21ItWorkWebp from './assets/images/home_lexus.png?as=webp';

const images = {
	logo: logo,
	logoFooter: logoFooter,
	carSuv: carSuv,
	carSuvWebp: carSuvWebp,
	carRam: carRam,
	carRamWebp: carRamWebp,
	carSedan: carSedan,
	carSedanWebp: carSedanWebp,
	carVan: carVan,
	carVanWebp: carVanWebp,
	iconBtn: iconBtn
}

const homePage = {
	hero: {
		title: 'The easiest way to buy a car in Canada',
		icon: images.iconBtn,
		slideImages: [
			{
				id: v1(),
				img: images.carSuv,
				webp: images.carSuvWebp
			},
			{
				id: v1(),
				img: images.carSedan,
				webp: images.carSedanWebp
			},
			{
				id: v1(),
				img: images.carRam,
				webp: images.carRamWebp
			},
			{
				id: v1(),
				img: images.carVan,
				webp: images.carVanWebp
			}
		]
	},
	itwork: {
		title: 'How does it work?',
		subtitle: 'From your Phone to your Home',
		text: 'We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.',
		images: {
			sedan: {
				img: img1ItWork,
				webp: img1ItWorkWebp
			},
			suv: {
				img: img21ItWork,
				webp: img21ItWorkWebp
			}
		}
	}
}

export const state = {
	images: images,
	homePage: homePage,
}

