import React from "react";
import Jumbotron from "./jumbotron.jsx";
import ListOfCards from "./listOfCards.jsx";

const Container = () => {
	return (
		<div className="container col-8">
			<div className="bg-light pb-4 px-3">
				<Jumbotron />
			</div>
			<div>
				<ListOfCards />
			</div>
		</div>
	);
};

export default Container;
