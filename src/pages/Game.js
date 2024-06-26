import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Game() {
    const mode = useParams().mode

    const [board, setBoard] = useState(Array(9).fill(null)); // game board
    const [xIsNext, setXIsNext] = useState(true); // (true for X, false for O)
    const [computerMove, setComputerMove] = useState(false);

    useEffect(() => {
        if (mode === 'computer' && !xIsNext && !calculateWinner(board)) {
            setComputerMove(true);
            setTimeout(handleComputerMove, 500);
        }
    }, [xIsNext, mode, board]);

    const handleClick = (index) => {
        if (computerMove) {
            return;
        }
        if (calculateWinner(board) || board[index]) {
            return;
        }
        const newBoard = [...board];
        newBoard[index] = xIsNext ? 'X' : 'O'; 
        setBoard(newBoard);
        setXIsNext(!xIsNext); 
    };

    const handleComputerMove = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * 9);
        } while (board[randomIndex]); 
        const newBoard = [...board]; 
        newBoard[randomIndex] = xIsNext ? 'X' : 'O'; 
        setBoard(newBoard);
        setXIsNext(!xIsNext);
        setComputerMove(false);
    };

    const calculateWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]; // Return the winning symbol
            }
        }
        return null; // If there's no winner, return null
    };

    const RenderSquare = (props) => {
        return (
            <div className="gridBlock" onClick={() => handleClick(props.idx)}>
                {board[props.idx]}
            </div>
        );
    };

    return (
        <div className="gameContainer">
            <div className="grid">
                <div className="turn">Turn: {xIsNext ? 'X' : 'O'}</div>
                <div className="timer">0:28</div>
                <RenderSquare idx={0} />
                <RenderSquare idx={1} />
                <RenderSquare idx={2} />
                <RenderSquare idx={3} />
                <RenderSquare idx={4} />
                <RenderSquare idx={5} />
                <RenderSquare idx={6} />
                <RenderSquare idx={7} />
                <RenderSquare idx={8} />
                <div className="inGameStats">You 5 wins</div>
                <div className="giveUp">Give Up</div>
                <div className="inGameStats">User</div>
            </div>
            <p style={{color:"white"}}>Playing against {mode}</p>
        </div>
    );
}