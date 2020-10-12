import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import Card from "../component/card.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log(store);
		actions.loadSomeData();
	}, []);

	const likeCharacterOrPlanet = element => {
		const listFavorites = store.favorites;
		listFavorites.push(element);
		actions.saveFavorites(listFavorites);
	};

	return (
		<div className="content">
			<h1>Characters</h1>
			<div className="row">
				{store.characters.map((character, idx) => (
					<div key={idx} className="content-card">
						<Card character={character} likeCharacterOrPlanet={likeCharacterOrPlanet} />
					</div>
				))}
			</div>
		</div>
	);
};
