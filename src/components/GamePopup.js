
import { useState, useEffect } from "react";
import "../styles/GamePopup.css"

const GamePopup = (props) => {
    const [counter, setCounter] = useState(5);
    const [counterAnimation, setCounterAnimation] = useState();

    useEffect(() => {
        setCounterAnimation(prevState => {
            if (prevState === "animate") {
                setCounterAnimation("animate2")
            } else if (prevState === "animate2") {
                setCounterAnimation("animate")
            }
        });
    }, [counter])

    const setVisibilityOfPopup = () => {
        props.setDisplayPopup(!props.displayPopup);
    }
    const countToGameStart = () => {
        setCounterAnimation("animate");
        let currentCounter = counter;
        const counterInterval = setInterval(() => {
            setCounter(--currentCounter);
            currentCounter === 0 && setVisibilityOfPopup();
            currentCounter === 0 && window.clearInterval(counterInterval);
            currentCounter === 0 && props.startCountingTime();
        }, 1000)
    }
    return (
        <div className="popup">
            <div className="popup-content">
                <div className="player">Teraz grają {props.activeTeam}</div>
                <div className="counter"><div className={`countdown ${counterAnimation}`}>{counter}</div></div>
                <button className="btn" onClick={countToGameStart}>Start Game</button>
            </div>
        </div>
    );
}

export default GamePopup;