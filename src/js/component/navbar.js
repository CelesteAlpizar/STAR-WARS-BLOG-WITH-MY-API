import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/star-wars-logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" href="#">
					<img src={starWarsLogo} alt="" width="180" height="" />
				</span>
			</Link>
			<Link to="/characters">
				<a
					className="nav-link active"
					aria-current="page"
					href="#"
					style={{ color: "#dba90d", fontWeight: "bolder", fontSize: "20px" }}>
					Characters
				</a>
			</Link>
			<Link to="/planets">
				<a
					className="nav-link active"
					aria-current="page"
					href="#"
					style={{ color: "#dba90d", fontWeight: "bolder", fontSize: "20px" }}>
					Planets
				</a>
			</Link>
			<div className="ml-auto " style={{ float: "right" }}>
				<div className="nav-item dropdown">
					<button
						className="nav-link dropdown-toggle btn-outline-warning"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						{store.favorites.length} Favorites
					</button>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
						{store.favorites.map((fav, index) => {
							return (
								<span className="dropdown-item" key={index}>
									{fav}
									<i className="fas fa-trash" onClick={() => actions.handleDelete(index)} />
								</span>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
