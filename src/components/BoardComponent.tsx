import {Board} from "../models/Board.ts";
import CellComponent from "./CellComponent.tsx";
import React, {useEffect, useState} from "react";
import {Cell} from "../models/Cell.ts";
import {Player} from "../models/Player.ts";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
}


const BoardComponent = ({board, setBoard,  currentPlayer, swapPlayer}: BoardProps) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer()
      setSelectedCell(null);
      updateBoard()
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell]);

  function highlightCells(){
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard: Board = board.getCopyBoard()
    setBoard(newBoard);
  }

  return (
    <>
      <p>Current Player {currentPlayer?.color}</p>
      <div className="board">
        {board.cells.map((row, index) =>
          <React.Fragment key={index}>
            {row.map(cell =>
              <CellComponent
                cell={cell}
                key={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                click={click}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </>
  )
}

export default BoardComponent