import { useState } from "react"
import './styles.scss'
import Board from './components/Board'
import { calculateWinner } from './Winner'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`

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
      <h1>{statusMessage}</h1>
      <Board squares={squares} handleClick={handleClick} />
    </div>
  )
}

export default App
