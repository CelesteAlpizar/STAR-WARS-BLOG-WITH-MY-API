import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import chewImg from "../../img/Chewbacca-dance.gif";
import galaxyImg from "../../img/galaxy_map.jpg";

export const Home = () => (
	<div className="container">
		<div className="row p-5">
			<div className="col-6">
				<div className="card">
					<img src={chewImg} className="card-img-top" alt="..." height="500px" />
					<div className="card-body">
						<h2 className="card-title text-center" style={{ fontWeight: "bolder" }}>
							Characters
						</h2>
						<div className="card-footer">
							<Link to="/characters">
								<button className="btn btn-outline-warning btn-lg btn-block">Learn more!</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="col-6">
				<div className="card">
					<img src={galaxyImg} className="card-img-top" alt="..." height="500px" />
					<div className="card-body">
						<h2 className="card-title text-center" style={{ fontWeight: "bolder" }}>
							Planets
						</h2>
						<div className="card-footer">
							<Link to="/planets">
								<button className="btn btn-outline-warning btn-lg btn-block">Learn more!</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
