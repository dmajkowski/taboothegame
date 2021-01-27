
import { useState } from "react";
import "../styles/GamePopup.css"

const GamePopup = (props) => {
    const setVisibilityOfPopup = () => {
        props.setDisplayPopup(!props.displayPopup);
    }

    return (
        <div className="popup">
            <div className="popup-content">
                Teraz grają {props.activeTeam}
                <button onClick={setVisibilityOfPopup}>Start Game</button>
            </div>
        </div>
    );
}

export default GamePopup;