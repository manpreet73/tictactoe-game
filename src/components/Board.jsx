import Square from "./Square"
import { useState } from "react"

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);

    const handleClick = (clickedPos) => {
        if(squares[clickedPos]){
            return;
        }
        setSquares(currentSquares => {
            return currentSquares.map((squareValue, position) => {
                if (clickedPos === position)
                    return isXNext ? 'X' : 'O';
                return squareValue;
            });
        });
        setIsXNext(currentIsXNext => !currentIsXNext)
    }
    const renderSquare = (position) => {
        return (
            <Square value={squares[position]} onClick={() => handleClick(position)} />
        )
    }
    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
