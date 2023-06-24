import { useState } from "react"
import './styles.scss'
import Board from './components/Board'
import { calculateWinner } from './Winner'
import StatusMessage from "./components/StatusMessage";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleClick = (clickedPos) => {
    if (squares[clickedPos] || winner) {
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

  return (
    <div className="app">
      <StatusMessage winner={winner} squares={squares} isXNext={isXNext} />
      <Board squares={squares} handleClick={handleClick} />
    </div>
  )
}

export default App
