import React, {useState, useEffect} from "react";
import uniqid from "uniqid";
import Card from "./Card";

const CardsContainer = props =>
{
	const [cards, setCards] =
	useState
	(
		[
			{name: "Ziad Swidan1", clicked: false, key: uniqid()},
			{name: "Ziad Swidan2", clicked: false, key: uniqid()},
			{name: "Ziad Swidan3", clicked: false, key: uniqid()},
			{name: "Ziad Swidan4", clicked: false, key: uniqid()},
			{name: "Ziad Swidan5", clicked: false, key: uniqid()},
			{name: "Ziad Swidan6", clicked: false, key: uniqid()},
			{name: "Ziad Swidan7", clicked: false, key: uniqid()},
			{name: "Ziad Swidan8", clicked: false, key: uniqid()},
			{name: "Ziad Swidan9", clicked: false, key: uniqid()},
			{name: "Ziad Swidan0", clicked: false, key: uniqid()},
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
	}

	useEffect(() => setCards(cards.sort(() => Math.random() - 0.5)), [cards]);

	return(
		<div className="cards-container">
			{
				cards.map(card => <Card info={card} key={card.key} onCardClicked={onCardClicked}/>)
			}
		</div>
	)
}

export default CardsContainer;
