import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import planetImg from "../../img/planet.jpg";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h1
				className="text-center"
				style={{
					color: "#dba90d",
					fontFamily: "fantasy",
					fontSize: "60px",
					textShadow: "3px 5px 7px rgba(0,0,0,0.3)"
				}}>
				Planets:
			</h1>
			<div className="card-columns">
				{store.planets.map((planets, index) => {
					return (
						<div className="card" key={index}>
							<img src={planetImg} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title mb-2">{planets.name}</h5>
								<p className="card-text m-0">
									Climate:
									{" " + planets.climate}
								</p>
								<p className="card-text m-0">
									Terrain:
									<br />
									{" " + planets.terrain}
								</p>
								<Link to={"/planets/" + index}>
									<button className="btn btn-outline-warning mt-2">Learn more!</button>
								</Link>
								<button
									className="btn btn-outline-warning mt-2 "
									style={{ float: "right" }}
									onClick={() => actions.getFavoritePlanets(index)}>
									<i className="fas fa-star" />
								</button>
							</div>
						</div>
					);
				})}
			</div>
			<div>
				<Link to="/">
					<button className="btn btn-outline-warning m-2 text-center">Back home</button>
				</Link>
			</div>
		</div>
	);
};
