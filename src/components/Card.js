import React from "react";

const Card = props =>
{
	return(
		<div className="card" onClick={() => props.onCardClicked(props.info.key)} style={props.info.clicked ? {background: "red"} : null}>
			<div className="cardImg-container">
				<img src="data:image/jpeg;base64,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" alt="ass"></img>
			</div>
			<h1 className="card-name">{props.info.name}</h1>
		</div>
	)
}

export default Card;
