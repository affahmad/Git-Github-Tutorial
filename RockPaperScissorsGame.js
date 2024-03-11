import React, { useState } from "react";
import "./RockPaperScissorsGame.css";
import Scores from "./Scores";
import Mesage from "./Mesage";
const RockPaperScissorsGame = () => {
  const [message, setMessage] = useState("Play Game!");
  const [winMessage, setWinMessage] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [color, setColor] = useState("#3d3d3d");
  const [count, setCount] = useState(0);

  const displayMessage = () => {
    setWinMessage("Wow You've Won This Game");
  };
  if (count > 20) {
    setCount(0);
    if (count === 0) {
      displayMessage();
    }
    setUserScore(0);
    setCompScore(0);
    // if (count === 20) {
    //   console.log(userScore);
    //   if (userScore > compScore) {
    //     setWinMessage("Wow You've Won This Game");
    //   } else {
    //     setWinMessage("Oh You've Lost This Game");
    //   }
    // }
  }

  const handldeClick = (userChoice) => {
    setCount((count) => count + 1);

    const compChoice = getcompChoice();
    game(userChoice, compChoice);
    // console.log(userChoice, compChoice);
    let scoreCard = document.querySelector(".scoreCard");

    setTimeout(() => {
      scoreCard.classList.add("active");
      setTimeout(() => {
        scoreCard.classList.remove("active");
      }, 1200);
    }, 50);
  };

  const game = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
      gameDraw();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
      } else {
        userWin = compChoice === "rock" ? false : true;
      }

      showMessage(userWin, userChoice, compChoice);
    }
  };

  const showMessage = (userWin, userChoice, compChoice) => {
    if (userWin) {
      setColor("#00b159");
      setMessage(`User's ${userChoice} Beat Computer's ${compChoice}`);
      setUserScore((userScore) => userScore + 1);
    } else {
      setColor("#bf0000");
      setMessage(`Computer's ${compChoice} Beat User's ${userChoice}`);
      setCompScore((compScore) => compScore + 1);
    }
  };

  const gameDraw = () => {
    setColor("#767676	");
    setMessage("Game Was Draw!");
  };

  const getcompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let ranInd = Math.floor(Math.random() * 3);
    return options[ranInd];
  };

  return (
    <div className="container">
      <h1>ROCK PAPER SCISSORS</h1>
      <div className="boxs">
        <div
          id="rock"
          className="box"
          onClick={() => {
            handldeClick("rock");
          }}
        >
          Rock
        </div>
        <div
          id="paper"
          className="box"
          onClick={() => {
            handldeClick("paper");
          }}
        >
          Paper
        </div>
        <div
          id="scissors"
          className="box"
          onClick={() => {
            handldeClick("scissors");
          }}
        >
          Scissors
        </div>
      </div>
      <Scores
        userScore={userScore}
        compScore={compScore}
        winMessage={winMessage}
        count={count}
      />
      <Mesage color={color} message={message} />
    </div>
  );
};

export default RockPaperScissorsGame;
