const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			url: "",
			type: "",
			element: {
				name: ""
			}
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
			},
			saveUrlToDetail(url, type) {
				setStore({ url: url, type: type });
			},
			getDetailElement(url) {
				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ element: data });
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	};
};

export default getState;
