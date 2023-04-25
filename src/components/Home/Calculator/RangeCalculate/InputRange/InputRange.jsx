import React from "react";
import ReactSlider from 'react-slider';
import './InputRange.scss';


export const InputRange = props => {

	const priceHandle = num => {
		let res = String(num).split('').reverse();

		for (let i = 3; i < res.length; i += 4) {
			res.splice(i, 0, ' ');
		}

		return res.reverse().join('');
	}

	const renderThumbHandler = (obj) => (
		<div {...obj} className="range-slider__btn"></div>
	)

	const onChangeValueHandler = (value, index) => {
		props.setLoan(value);
	}

	let type = (props.type === 'month') ?
		`${props.loan}` :
		`$ ${priceHandle(props.loan)}`;


	return (
		<div className="slider-range__wrap">
			<h2 className="slider-range__title">
				{props.title}
			</h2>
			{
				(props.type === 'month') ?
					<p className="slider-range__value">
						{type}<span>{props.type}</span>
					</p>
					:
					<p className="slider-range__value">
						{type}
					</p>
			}

			<ReactSlider
				max={props.max}
				defaultValue={props.loan}
				className="slider-range__slider range-slider"
				thumbClassName="range-slider__thumb"
				trackClassName="range-slider__track"
				onChange={onChangeValueHandler}
				renderThumb={renderThumbHandler}
			/>
		</div>
	)
}