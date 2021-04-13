import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<h3
				className="card-title text-center m-3"
				style={{
					color: "whitesmoke",
					fontWeight: "bolder",
					fontSize: "50px",
					textShadow: "5px 7px 9px rgba(0,0,0,0.5)"
				}}>
				{store.planets[params.id].name}
			</h3>
			<div className="row m-5">
				<div className="col-7 p-4">
					<img
						src="https://static.wikia.nocookie.net/starwars/images/e/ea/Kashyyyk-SW-MTHC.png/revision/latest?cb=20190605010641"
						style={{ width: "550px" }}
					/>
				</div>
				<div className="col-5 p-4">
					<p
						className="text-justify"
						style={{
							color: "whitesmoke",
							textShadow: "3px 5px 7px rgba(0,0,0,0.9)",
							fontWeight: "bold",
							fontSize: "18px"
						}}>
						Lucas ipsum dolor sit amet marek zev squib rodian amidala moor vurk nelvaanian even hutt.
						Tchuukthai gamorr owen aparo doldur jodo tiin. Natasi lama atrivis bith. Organa kastolar mas
						aayla vodran luke vilim wharl. Chazrach vagaari windu ventress dengar yaka drall rune jade.
						Aqualish gricho bando organa conan tarpals wuher kit. Castell nien arvel thisspiasian tharin.
						Nute dak rancisis darth elom saffa. Shado rugor katarn tapani boba jarael muzzer psadan umbaran.
						Nosaurian rotta vagaari nadd bane jobal jax opress.
					</p>
				</div>
			</div>
			<div>
				<hr className="my-4 bg-light" />
			</div>
			<div
				className="row"
				style={{
					color: "whitesmoke",
					fontSize: "20px",
					fontWeight: "bold",
					textShadow: "3px 5px 7px rgba(0,0,0,0.9)"
				}}>
				<div className="col-2">
					Name:
					<br />
					{store.planets[params.id].name}
				</div>
				<div className="col-2">
					Climate:
					<br />
					{store.planets[params.id].climate}
				</div>
				<div className="col-2">
					Population:
					<br />
					{store.planets[params.id].population}
				</div>
				<div className="col-2">
					Orbital period:
					<br />
					{store.planets[params.id].orbital_period}
				</div>
				<div className="col-2">
					Rotation period:
					<br />
					{store.planets[params.id].rotation_period}
				</div>
				<div className="col-2">
					Diameter:
					<br />
					{store.planets[params.id].diameter} Km
				</div>
			</div>
			<Link to="/planets">
				<button className="btn btn-outline-warning text-center m-4">Back to planets</button>
			</Link>
		</div>
	);
};
