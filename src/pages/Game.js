import { useParams } from 'react-router-dom';
import Board from '../components/Board';

export default function Game() {
    const params = useParams()

    const GamePage = () => {
        return (
            <div className="gameContainer">
                <Board />
                <p>Playing against {params.mode}</p>
            </div>
        )
                
    }

    return (
        <GamePage />
    )
}