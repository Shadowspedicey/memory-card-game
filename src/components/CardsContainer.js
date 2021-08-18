import React, {useState, useEffect} from "react";
import uniqid from "uniqid";
import arrayShuffle from  "array-shuffle";
import Card from "./Card";

import Shadow from "./photos/Shadow.png";
import ZiadSWidan from "./photos/ZiadSWidan.png";
import Shehab from "./photos/Shehab.png";
import Scins from "./photos/Scins.png";
import Mody from "./photos/Mody.png";
import Inertia from "./photos/Inertia.png";
import DLow from "./photos/DLow.png";
import Osis from  "./photos/Osis.png";
import Remix from "./photos/Remix.png";
import ReepsOne from "./photos/ReepsOne.png";

const CardsContainer = props =>
{
	const [cards, setCards] =
	useState
	(
		[
			{name: "Shadow", photo: Shadow, clicked: false, key: uniqid()},
			{name: "Ziad Swidan", photo: ZiadSWidan, clicked: false, key: uniqid()},
			{name: "Shehab", photo: Shehab, clicked: false, key: uniqid()},
			{name: "Scins", photo: Scins, clicked: false, key: uniqid()},
			{name: "Mody", photo: Mody, clicked: false, key: uniqid()},
			{name: "Inertia", photo: Inertia, clicked: false, key: uniqid()},
			{name: "D-Low", photo: DLow, clicked: false, key: uniqid()},
			{name: "Osis", photo: Osis, clicked: false, key: uniqid()},
			{name: "Remix", photo: Remix, clicked: false, key: uniqid()},
			{name: "Reeps One", photo: ReepsOne, clicked: false, key: uniqid()},
		]
	);

	const onCardClicked = key =>
	{
		if (cards.filter(card => card.key === key)[0].clicked) return resetGame();
		setCards
		(
			cards.map(card =>
			{
				if (card.key === key) return {...card, clicked: true}
				else return card;
			})
		);
		props.icrementScore();
	};

	const resetGame = () =>
	{
		setCards
		(
			cards.map(card =>
			{
				return {...card, clicked: false}
			})
		);
		props.resetScore();
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => setCards(arrayShuffle([...cards])), [props.score]);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => setCards(arrayShuffle([...cards])), []);

	return(
		<div className="cards-container">
			{
				cards.map(card => <Card info={card} key={card.key} onCardClicked={onCardClicked}/>)
			}
		</div>
	)
}

export default CardsContainer;
