const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {},
			loadSomeData: () => {
				/**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const header = { "Content-Type": "application/json" };

				fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: header
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(err => {
						console.log(err);
					});

				fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: header
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ characters: data.results });
					})
					.catch(err => {
						console.log(err);
					});
			},
			saveFavorites(favorites) {
				setStore({ favorites: favorites });
			}
		}
	};
};

export default getState;
