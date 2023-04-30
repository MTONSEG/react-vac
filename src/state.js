import { v1 as uuidv1, v1 } from 'uuid';
import logo from './assets/icons/logo.svg';
import logoFooter from './assets/icons/logo_footer.svg';
import logoCompany from './assets/icons/creator-logo.svg';
//Social icons
import iconInstagram from './assets/icons/instagram.svg';
import iconFacebook from './assets/icons/facebook.svg';
import iconYoutube from './assets/icons/youtube.svg';
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
//choseDream images 
import imgChooseDream from './assets/images/home_choise-car.png';
import imgChooseDreamWebp from './assets/images/home_choise-car.png?as=webp';
import imgChooseDreamM from './assets/images/home_choise-car_mob.png';
import imgChooseDreamWebpM from './assets/images/home_choise-car_mob.png?as=webp';
import imgChooseDreamT from './assets/images/home_choise-car_tab.png';
import imgChooseDreamWebpT from './assets/images/home_choise-car_tab.png?as=webp';
//Comments Slider images
import imgComment from './assets/images/home-comments__photo.jpg';
import imgCommentWebp from './assets/images/home-comments__photo.jpg?as=webp';
import imgComment2 from './assets/images/home-comments__photo2.jpg';
import imgComment2Webp from './assets/images/home-comments__photo2.jpg?as=webp';
import iconArrowWhite from './assets/icons/slider_arr-left_white.svg';
//Interesting read
import imgInteresting1 from './assets/images/home_interest-img1.jpg';
import imgInteresting1Webp from './assets/images/home_interest-img1.jpg?as=webp';
import imgInteresting2 from './assets/images/home_interest-img2.jpg';
import imgInteresting2Webp from './assets/images/home_interest-img2.jpg?as=webp';
import imgInteresting3 from './assets/images/home_interest-img3.jpg';
import imgInteresting3Webp from './assets/images/home_interest-img3.jpg?as=webp';

const images = {
	logo: logo,
	logoFooter: logoFooter,
	logoCompany: logoCompany,
	iconInstagram: iconInstagram,
	iconFacebook: iconFacebook,
	iconYoutube: iconYoutube,
	homePage: {
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
		iconInventory: iconInventory,
		imgChooseDream: imgChooseDream,
		imgChooseDreamWebp: imgChooseDreamWebp,
		imgChooseDreamM: imgChooseDreamM,
		imgChooseDreamWebpM: imgChooseDreamWebpM,
		imgChooseDreamT: imgChooseDreamT,
		imgChooseDreamWebpT: imgChooseDreamWebpT,
		imgComment: imgComment,
		imgCommentWebp: imgCommentWebp,
		imgComment2: imgComment2,
		imgComment2Webp: imgComment2Webp,
		iconArrowWhite: iconArrowWhite,
		imgInteresting1: imgInteresting1,
		imgInteresting1Webp: imgInteresting1Webp,
		imgInteresting2: imgInteresting2,
		imgInteresting2Webp: imgInteresting2Webp,
		imgInteresting3: imgInteresting3,
		imgInteresting3Webp: imgInteresting3Webp,
	}
}

const homePage = {
	hero: {
		title: 'The easiest way to buy a car in Canada',
		icon: images.homePage.iconBtn,
		slideImages: [
			{
				id: v1(),
				img: images.homePage.carSuv,
				webp: images.homePage.carSuvWebp
			},
			{
				id: v1(),
				img: images.homePage.carSedan,
				webp: images.homePage.carSedanWebp
			},
			{
				id: v1(),
				img: images.homePage.carRam,
				webp: images.homePage.carRamWebp
			},
			{
				id: v1(),
				img: images.homePage.carVan,
				webp: images.homePage.carVanWebp
			}
		]
	},
	itwork: {
		title: 'How does it work?',
		subtitle: 'From your Phone to your Home',
		text: 'We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.',
		images: {
			sedan: {
				img: images.homePage.img1ItWork,
				webp: images.homePage.img1ItWorkWebp
			},
			suv: {
				img: images.homePage.img21ItWork,
				webp: images.homePage.img21ItWorkWebp
			}
		}
	},
	easySteps: {
		title: 'Your perfect car in 5 easy steps',
		image: {
			img: images.homePage.imgEasySteps,
			webp: images.homePage.imgEasyStepsWebp,
			imgT: images.homePage.imgEasyStepsT,
			webpT: images.homePage.imgEasyStepsWebpT,
			imgM: images.homePage.imgEasyStepsM,
			webpM: images.homePage.imgEasyStepsWebpM,
		},
		list: [
			{
				id: 1,
				title: 'First Contact',
				text: 'Tell us what your dream vehicle is.',
				icon: images.homePage.triangleStep
			},
			{
				id: 2,
				title: 'Vehicle Selection',
				text: 'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.',
				icon: images.homePage.triangleStep
			},
			{
				id: 3,
				title: 'Secure Financing',
				text: 'You work with a dedicated Qualified Agent to secure financing on your terms.',
				icon: images.homePage.triangleStep
			},
			{
				id: 4,
				title: 'Vehicle Delivery',
				text: 'We deliver your car to your home or office for you to test drive.',
				icon: images.homePage.triangleStep
			},
			{
				id: 5,
				title: 'Getting Vehicle',
				text: 'If you love the vehicle, you sign the paperwork and keep the car.',
				icon: images.homePage.triangleStep
			},
		]
	},
	advantages: {
		title: 'Advantages of working with us',
		list: [
			{
				id: v1(),
				icon: images.homePage.iconDelivery,
				title: 'Vehicle Delivery',
				text: 'We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.'
			},
			{
				id: v1(),
				icon: images.homePage.iconFinancing,
				title: 'Auto Financing',
				text: 'We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%'
			},
			{
				id: v1(),
				icon: images.homePage.iconInventory,
				title: 'Huge Inventory',
				text: 'We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you'
			},
		]
	},
	chooseDream: {
		title: 'Сhoose your dream vehicle in our catalog',
		text: 'In our catalogue there are many models of vehicles. Choose your car to your liking.',
		image: {
			img: images.homePage.imgChooseDream,
			webp: images.homePage.imgChooseDreamWebp,
			imgM: images.homePage.imgChooseDreamM,
			webpM: images.homePage.imgChooseDreamWebpM,
			imgT: images.homePage.imgChooseDreamT,
			webpT: images.homePage.imgChooseDreamWebpT,
		},
	},
	happyCustomers: {
		title: 'Happy customers',
		text: 'Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes.',
		subtitle: 'What are you waiting? Get started right now!',
		cards: [
			{
				num: '7,988+',
				text: 'Sold Cars'
			},
			{
				num: '16,974+',
				text: 'Vehicles To Choose From'
			},
			{
				num: '123',
				text: 'Experts Across Canada'
			},
		]
	},
	commentsSlider: {
		title: 'What our client say about us!',
		iconBtn: images.homePage.iconArrowWhite,
		slides: [
			{
				id: v1(),
				image: {
					img: images.homePage.imgComment,
					webp: images.homePage.imgCommentWebp,
				},
				name: 'Laura Chaisson',
				comment: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id ese'
			},
			{
				id: v1(),
				image: {
					img: images.homePage.imgComment2,
					webp: images.homePage.imgComment2Webp,
				},
				name: 'John Smith',
				comment: 'Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id ese'
			},
			{
				id: v1(),
				image: {
					img: images.homePage.imgComment,
					webp: images.homePage.imgCommentWebp,
				},
				name: 'Alex Stone',
				comment: 'Lorem esse sint in nisi id ese. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem.'
			},
		]
	},
	calculator: {
		title: 'Let’s figure out how much you can afford',
		text: 'Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.',
		loanAmount: {
			title: 'Loan Amount',
			max: 1000000,
			default: 150000
		},
		loanDuration: {
			title: 'Loan Duration',
			max: 60,
			default: 18
		},
		payments: [
			{
				title: 'Bi-Weekly Payment',
				value: `$ 483`,
			},
			{
				title: 'Monthly Payment',
				value: `$ 966`,
			},
			{
				title: 'Weekly Payment',
				value: `$ 241`,
			},
		]
	},
	interesting: {
		title: 'Interesting to read',
		iconBtn: images.homePage.iconArrowWhite,
		list: [
			{
				id: v1(),
				date: '10 May, 2020',
				text: 'How to save on buying a car? Why is it better to buy from us',
				image: {
					img: images.homePage.imgInteresting1,
					webp: images.homePage.imgInteresting1Webp,
				}
			},
			{
				id: v1(),
				date: '10 May, 2020',
				text: 'How to save on buying a car? Why is it better to buy from us',
				image: {
					img: images.homePage.imgInteresting2,
					webp: images.homePage.imgInteresting2Webp,
				}
			},
			{
				id: v1(),
				date: '10 May, 2020',
				text: `How to save on buying a car?  
				Why is it better to buy from us`,
				image: {
					img: images.homePage.imgInteresting3,
					webp: images.homePage.imgInteresting3Webp,
				}
			},
		]
	}
}
const calcPage = {
	bigTitle: 'Use our free calculator!',
	title: 'Let’s figure out how much you can afford',
	text: 'Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.',
	loanAmount: {
		title: 'Loan Amount',
		max: 1000000,
		default: 150000
	},
	loanDuration: {
		title: 'Loan Duration',
		max: 60,
		default: 18
	},
	payments: [
		{
			title: 'Bi-Weekly Payment',
			value: `$ 483`,
		},
		{
			title: 'Monthly Payment',
			value: `$ 966`,
		},
		{
			title: 'Weekly Payment',
			value: `$ 241`,
		},
	]
}

export const state = {
	images: images,
	homePage: homePage,
	calcPage: calcPage,
}

