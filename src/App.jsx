import { useState } from "react"
import './styles.scss'
import Board from './components/Board'
import { calculateWinner } from './Winner'
import StatusMessage from "./components/StatusMessage";
import History from "./components/History"

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), isXNext: false }]);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];
  const winner = calculateWinner(gamingBoard.squares);

  const handleClick = (clickedPos) => {
    if (gamingBoard.squares[clickedPos] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;
      const lastGaminState = isTraversing ? currentHistory[currentMove] : currentHistory[currentHistory.length - 1];
      const nextSquareState = lastGaminState.squares.map((squareValue, position) => {
        if (clickedPos === position)
          return lastGaminState.isXNext ? 'X' : 'O';
        return squareValue;
      });

      const base = isTraversing ? currentHistory.slice(0, currentHistory.indexOf(lastGaminState)+1) : currentHistory;
      return base.concat({
        squares: nextSquareState,
        isXNext: !lastGaminState.isXNext
      });
    });
    setCurrentMove(move => move + 1)
  }
  const moveTo = move => {
    setCurrentMove(move);
  }

  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board squares={gamingBoard.squares} handleClick={handleClick} />
      <h2>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  )
}

export default App
