const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				await fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "aplication/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ characters: data.results });
					})
					.catch(error => console.log(error, "error"));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getPlanets: async () => {
				await fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: {
						"Content-Type": "aplication/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => console.log(error, "error"));
			},
			getFavoriteCharacters: index => {
				const store = getStore();
				let handleRepeat = store.favorites.includes(store.characters[index].name);
				if (handleRepeat === false) {
					store.favorites.push(store.characters[index].name);
				}
				setStore(store);
			},
			getFavoritePlanets: index => {
				const store = getStore();
				let handleRepeat = store.favorites.includes(store.planets[index].name);
				if (handleRepeat === false) {
					store.favorites.push(store.planets[index].name);
				}
				setStore(store);
			},
			handleDelete: index => {
				const store = getStore();
				store.favorites.splice(index, 1);
				setStore(store);
			}
		}
	};
};

export default getState;
