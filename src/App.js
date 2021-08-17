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
			<CardsContainer icrementScore={() => setScore(score + 1)} resetScore={() => setScore(0)}/>
    </div>
  );
}

export default App;
