import React from "react";
import Card from "./card.jsx";

const ListOfCards = () => {
	const list = [
		{
			title: "Card title",
			imageUrl: "https://picsum.photos/500/350",
			description:
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			label: "Find Out More!",
		},
		{
			title: "Card title",
			imageUrl: "https://picsum.photos/500/350",
			description:
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			label: "Find Out More!",
		},
		{
			title: "Card title",
			imageUrl: "https://picsum.photos/500/350",
			description:
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			label: "Find Out More!",
		},
		{
			title: "Card title",
			imageUrl: "https://picsum.photos/500/350",
			description:
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			label: "Find Out More!",
		},
	];
	const listMap = list.map((cardItem) => {
		return (
			<Card
				title={cardItem.title}
				imageUrl={cardItem.imageUrl}
				description={cardItem.description}
				label={cardItem.label}
			/>
		);
	});
	return (
		<div
			className="d-flex gap-3"
			style={{ justifyContent: "space-between" }}>
			{listMap}
		</div>
	);
};

export default ListOfCards;
