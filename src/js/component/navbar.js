import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const showDropDown = () => {
		const div = document.getElementById("dropdow");
		div.classList.toggle("display-block");
	};

	const deleteForite = favorite => {
		const listFavorites = store.favorites;
		for (let index = 0; index < listFavorites.length; index++) {
			if (listFavorites[index].name === favorite.name) {
				listFavorites.splice(index, 1);
				actions.saveFavorites(listFavorites);
			}
		}
	};

	const renderListFavorites = () => {
		console.log(store.favorites);
		if (store.favorites.length === 0) {
			return <p className="dropdown-item">(empty)</p>;
		} else {
			return store.favorites.map((favorite, key) => {
				return (
					<p className="dropdown-item" key={key}>
						{favorite.name}
						<span className="icon">
							<i className="fas fa-trash-alt" onClick={() => deleteForite(favorite)} />
						</span>
					</p>
				);
			});
		}
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3 row">
			<Link to="/" style={{ width: "50%", paddingLeft: "8%" }}>
				<img
					style={{ width: "14%" }}
					src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png"
					className="navbar-brand mb-0 h1"
					alt="logo"
				/>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					onClick={showDropDown}>
					Favorites <span className="count">{store.favorites.length}</span>
				</button>
				<div className="dropdown-menu" id="dropdow" aria-labelledby="dropdownMenuButton">
					{renderListFavorites()}
				</div>
			</div>
		</nav>
	);
};
