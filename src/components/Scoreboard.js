import React from "react";

const Scoreboard = props =>
{
	return(
		<div className="scoreboard">
			<h2>Score: {props.score}</h2>
			<h2>High Score: {props.highScore}</h2>
		</div>
	)
}

export default Scoreboard;
