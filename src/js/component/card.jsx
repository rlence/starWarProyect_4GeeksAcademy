import React from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";

function Card(props) {
	const character = props.character;
	return (
		<div className="card">
			<img src={character.url} className="card-img-top" alt={character.name} />
			<div className="card-body">
				<h5 className="card-title">{character.name}</h5>
				<p className="card-text">Gender: {character.gender} </p>
				<p className="card-text">Heir Color: {character.hair_color} </p>
				<p className="card-text">Eye Color: {character.eye_color} </p>
				<div className="line-btn">
					<p className="btn btn-outline-primary">Learn more!</p>
					<p className="like" onClick={e => props.likeCharacterOrPlanet(character)}>
						LIKE
					</p>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	character: PropTypes.object,
	likeCharacterOrPlanet: PropTypes.func
};

export default Card;
