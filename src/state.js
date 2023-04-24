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
//EasySteps images 
import imgEasySteps from './assets/images/home_phones.png';
import imgEasyStepsWebp from './assets/images/home_phones.png?as=webp';
import imgEasyStepsT from './assets/images/home_phones_tab.png';
import imgEasyStepsWebpT from './assets/images/home_phones_tab.png?as=webp';
import imgEasyStepsM from './assets/images/home_phones_mob.png';
import imgEasyStepsWebpM from './assets/images/home_phones_mob.png?as=webp';
import triangleStep from './assets/icons/home_small-tringle.svg';
//advantages icons 
import iconDelivery from './assets/icons/home_delivery.svg';
import iconFinancing from './assets/icons/home_finansing.svg';
import iconInventory from './assets/icons/home_car.svg';


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
	iconBtn: iconBtn,
	img1ItWork: img1ItWork,
	img1ItWorkWebp: img1ItWorkWebp,
	img21ItWork: img21ItWork,
	img21ItWorkWebp: img21ItWorkWebp,
	imgEasySteps: imgEasySteps,
	imgEasyStepsWebp: imgEasyStepsWebp,
	imgEasyStepsT: imgEasyStepsT,
	imgEasyStepsWebpT: imgEasyStepsWebpT,
	imgEasyStepsM: imgEasyStepsM,
	imgEasyStepsWebpM: imgEasyStepsWebpM,
	triangleStep: triangleStep,
	iconDelivery: iconDelivery,
	iconFinancing: iconFinancing,
	iconInventory: iconInventory
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
				img: images.img1ItWork,
				webp: images.img1ItWorkWebp
			},
			suv: {
				img: images.img21ItWork,
				webp: images.img21ItWorkWebp
			}
		}
	},
	easySteps: {
		title: 'Your perfect car in 5 easy steps',
		image: {
			img: images.imgEasySteps,
			webp: images.imgEasyStepsWebp,
			imgT: images.imgEasyStepsT,
			webpT: images.imgEasyStepsWebpT,
			imgM: images.imgEasyStepsM,
			webpM: images.imgEasyStepsWebpM,
		},
		list: [
			{
				id: 1,
				title: 'First Contact',
				text: 'Tell us what your dream vehicle is.',
				icon: images.triangleStep
			},
			{
				id: 2,
				title: 'Vehicle Selection',
				text: 'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.',
				icon: images.triangleStep
			},
			{
				id: 3,
				title: 'Secure Financing',
				text: 'You work with a dedicated Qualified Agent to secure financing on your terms.',
				icon: images.triangleStep
			},
			{
				id: 4,
				title: 'Vehicle Delivery',
				text: 'We deliver your car to your home or office for you to test drive.',
				icon: images.triangleStep
			},
			{
				id: 5,
				title: 'Getting Vehicle',
				text: 'If you love the vehicle, you sign the paperwork and keep the car.',
				icon: images.triangleStep
			},
		]
	},
	advantages: {
		title: 'Advantages of working with us',
		list: [
			{
				id: v1(),
				icon: images.iconDelivery,
				title: 'Vehicle Delivery',
				text: 'We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.'
			},
			{
				id: v1(),
				icon: images.iconFinancing,
				title: 'Auto Financing',
				text: 'We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%'
			},
			{
				id: v1(),
				icon: images.iconInventory,
				title: 'Huge Inventory',
				text: 'We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you'
			},
		]
	}
}

export const state = {
	images: images,
	homePage: homePage,
}

