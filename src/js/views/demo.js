import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		chargeData();
	}, []);

	const chargeData = () => {
		const url = store.url;
		actions.getDetailElement(url);
	};

	const conditionalRender = () => {
		const type = store.type;
		const element = store.element;
		if (type === "planet") {
			return (
				<Fragment>
					<div className="column">
						<p>Name:</p>
						<p>{element.name}</p>
					</div>
					<div className="column">
						<p>Climate:</p>
						<p>{element.climate}</p>
					</div>
					<div className="column">
						<p>Population:</p>
						<p>{element.population}</p>
					</div>
					<div className="column">
						<p>Orbital Period:</p>
						<p>{element.orbital_period}</p>
					</div>
					<div className="column">
						<p>Rotatios Period:</p>
						<p>{element.rotation_period}</p>
					</div>
					<div className="column">
						<p>Diameter:</p>
						<p>{element.diameter}</p>
					</div>
				</Fragment>
			);
		} else if (type === "people") {
			return (
				<Fragment>
					<div className="column">
						<p>Name:</p>
						<p>{element.name}</p>
					</div>
					<div className="column">
						<p>Birth Year:</p>
						<p>{element.birth_year}</p>
					</div>
					<div className="column">
						<p>Gender:</p>
						<p>{element.gender}</p>
					</div>
					<div className="column">
						<p>Heigth:</p>
						<p>{element.height}</p>
					</div>
					<div className="column">
						<p>Skin Color:</p>
						<p>{element.skin_color}</p>
					</div>
					<div className="column">
						<p>Eye Color:</p>
						<p>{element.eye_color}</p>
					</div>
				</Fragment>
			);
		} else {
			return null;
		}
	};
	console.log(store);
	return (
		<div className="container">
			<div className="row">
				<div className="img-box">
					<img
						className="img"
						src="https://i.pinimg.com/originals/10/6f/9c/106f9c82f387be0e552f37e7e107a6f0.jpg"
						alt="img-muestra"
					/>
				</div>
				<div className="history-box">
					<h2>{store.element.name}</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipiscing, elit purus vulputate non hendrerit hac,
						convallis mi dictumst ligula tristique. Tristique suspendisse iaculis eu quis mollis lacinia
						tortor augue sociosqu phasellus condimentum consequat dignissim luctus, erat purus molestie
						conubia nec potenti aliquam a feugiat habitant ligula porta metus. Consequat sed lacinia
						pharetra porta vehicula blandit, sociis nulla rutrum mi taciti potenti luctus, eros litora
						hendrerit varius ridiculus
					</p>
				</div>
			</div>
			<div className="row line-red">{conditionalRender()}</div>
		</div>
	);
};
