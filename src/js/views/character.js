import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = () => {
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
				{store.characters[params.id].name}
			</h3>
			<div className="row m-5">
				<div className="col-7 p-4">
					<img
						src="https://img4.goodfon.com/wallpaper/nbig/6/61/sw-rebel-star-wars-helmet-logo-born-to-rebel.jpg"
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
					{store.characters[params.id].name}
				</div>
				<div className="col-2">
					Birth Year:
					<br />
					{store.characters[params.id].birth_year}
				</div>
				<div className="col-2">
					Gender:
					<br />
					{store.characters[params.id].gender}
				</div>
				<div className="col-2">
					Height:
					<br />
					{store.characters[params.id].height} cm
				</div>
				<div className="col-2">
					Skin Color:
					<br />
					{store.characters[params.id].skin_color}
				</div>
				<div className="col-2">
					Eye Color:
					<br />
					{store.characters[params.id].eye_color}
				</div>
			</div>
			<Link to="/characters">
				<button className="btn btn-outline-warning text-center m-4">Back to characters</button>
			</Link>
		</div>
	);
};
