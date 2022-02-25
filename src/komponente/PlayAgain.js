import React from 'react';

function PlayAgain(props){
    return(
        <div>
        <button onClick={props.onReset} className="play_again">Play Again</button>
        <h1 style={{color: props.status==='lose' ? 'red': 'green'}}>{props.status==='lose'? "Game over": "Congrats"}</h1>
        </div>
    )
}
export default PlayAgain;