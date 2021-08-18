import React from "react";
import useFitText from "use-fit-text";

const Card = props =>
{
	const {fontSize, ref} = useFitText({maxFontSize: 50});

	return(
		<div className={`card`} onClick={() => props.onCardClicked(props.info.key)} style={{fontSize}} ref={ref}>
			<div className="cardImg-container">
				<img src={props.info.photo} alt={props.info.name}></img>
			</div>
			<h1 className="card-name">{props.info.name}</h1>
		</div>
	)
}

export default Card;
