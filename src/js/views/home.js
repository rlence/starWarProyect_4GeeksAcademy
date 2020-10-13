import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Redirect } from "react-router-dom";

import Card from "../component/card.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		actions.loadSomeData();
	}, []);

	const likeCharacterOrPlanet = element => {
		const listFavorites = store.favorites;
		listFavorites.push(element);
		actions.saveFavorites(listFavorites);
	};

	const conditioanRender = name => {
		if (store.favorites.length > 0) {
			for (let index = 0; index < store.favorites.length; index++) {
				if (store.favorites[index].name === name) {
					return <i className="fas fa-heart" />;
				} else {
					return <i className="far fa-heart" />;
				}
			}
		} else {
			return <i className="far fa-heart" />;
		}
	};

	const learnMore = (element, type) => {
		console.log(type);
		const substacUrl = element.url.substr(4, element.url.length - 4);
		const url = "https" + substacUrl;
		actions.saveUrlToDetail(url, type);
		setRedirect(true);
	};

	return (
		<div className="content">
			<h1>Characters</h1>
			<div className="row">
				{store.characters.map((character, idx) => (
					<div key={idx} className="content-card">
						<Card
							character={character}
							likeCharacterOrPlanet={likeCharacterOrPlanet}
							conditioanRender={conditioanRender}
							learnMore={learnMore}
						/>
					</div>
				))}
			</div>
			<h1>Planets</h1>
			<div className="row">
				{store.planets.map((planet, idx) => (
					<div key={idx} className="content-card">
						<div className="card">
							<img
								src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"
								className="card-img-top"
								alt={planet.name}
							/>
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<p className="card-text">Population: {planet.population} </p>
								<p className="card-text">Terrain: {planet.terrain} </p>
								<div className="line-btn">
									<p className="btn btn-outline-primary" onClick={() => learnMore(planet, "planet")}>
										Learn more!
									</p>
									<p className="btn btn-outline-warning" onClick={e => likeCharacterOrPlanet(planet)}>
										{conditioanRender(planet.name)}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			{redirect ? <Redirect to="/demo" /> : null}
		</div>
	);
};
