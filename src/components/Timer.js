import { useState } from 'react';

const Timer = (props) => {

    const [maxTime, setMaxTime] = useState(props.maxTime);

    function startTimer() {
        let currentTime = maxTime;
        const timerInterval = setInterval(() => {
            currentTime > 0 && currentTime--;
            setMaxTime(currentTime);
            props.timeLeft(currentTime);
            currentTime === 0 && window.clearInterval(timerInterval)
            currentTime === 0 && setMaxTime(props.maxTime)
        }, 1000)
    };


    return (
        <>
            <button onClick={startTimer}>Start game</button>
            <div className="timer">{maxTime > 60 ? `${Math.floor(maxTime / 60)} : ${maxTime % 60}` : maxTime}</div>
        </>
    )
};

export default Timer;