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
	iconBtn:iconBtn
}

export const state = {
	images: images,
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
	}
}

