//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "../js/component/navbar.jsx";
import Container from "./component/container.jsx";
import Jumbotron from "../js/component/jumbotron.jsx";
import Card from "../js/component/card.jsx";
import Footer from "../js/component/footer.jsx";
import ListOfCards from "./component/listOfCards.jsx";

//render your react application
ReactDOM.render(
	<>
		<Navbar />
		<Container />
		<Footer />
	</>,

	document.querySelector("#app")
);
