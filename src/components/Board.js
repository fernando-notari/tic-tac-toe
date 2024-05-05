export default function Board() {
    
    return (
        <div className="grid">
            <div className="turn">Your turn</div>
            <div className="timer">0:28</div>
            <div className="gridBlock"></div>
            <div className="gridBlock"></div>
            <div className="gridBlock"></div>
            <div className="gridBlock"></div>
            <div className="gridBlock"></div>
            <div className="gridBlock"></div>
            <div className="gridBlock"></div>
            <div className="gridBlock"></div>
            <div className="gridBlock"></div>
            <div className="inGameStats">You 5 wins</div>
            <div className="giveUp">Give Up</div>
            <div className="inGameStats">User</div>
        </div>
    )
}