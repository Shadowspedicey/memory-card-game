import React, {useState, useEffect} from "react";
import Scoreboard from "./components/Scoreboard";
import CardsContainer from "./components/CardsContainer";
import './App.css';

const App = () => 
{
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	useEffect(() =>
	{
		if (score > highScore) setHighScore(score);
	}, [score, highScore])

  return (
    <div className="App">
			<Scoreboard score={score} highScore={highScore}/>
			<div style={{width: "100%", height: "60px"}}></div>
			<CardsContainer icrementScore={() => setScore(score + 1)} resetScore={() => setScore(0)} score={score}/>
    </div>
  );
}

export default App;
