import './App.css'
import BoardComponent from "./components/BoardComponent";
import React, {useEffect, useState} from "react";
import {Board} from "./models/Board.ts";
import {Player} from "./models/Player.ts";
import {Colors} from "./models/Colors.ts";
import LostFigures from "./components/LostFigures.tsx";
import Timer from "./components/Timer";

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer);
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className={"app"}>
      <Timer currentPlayer={currentPlayer} restart={restart}/>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures
          title={"Black: "}
          figures={board.lostBlackFigures}
        />
        <LostFigures
          title={"White: "}
          figures={board.lostWhiteFigures}
        />
      </div>
    </div>
  )
}

export default App
