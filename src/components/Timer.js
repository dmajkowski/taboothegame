import { useState, useEffect } from 'react';

const Timer = (props) => {

    const [maxTime, setMaxTime] = useState(props.maxTime);

    function countAnswerTime() {
        let currentTime = maxTime;
        const timerInterval = setInterval(() => {
            currentTime > 0 && currentTime--;
            setMaxTime(currentTime);
            console.log(currentTime)
            props.changeActiveTeam(currentTime);
            currentTime === 0 && window.clearInterval(timerInterval)
            currentTime === 0 && setMaxTime(props.maxTime)
        }, 1000)
    };

    useEffect(() => {
        props.startTimer && countAnswerTime();
        console.log(props.startTimer);
        return function cleanup() {
            window.clearInterval();
        };
    }, [props.startTimer]);

    return (
        <>
            <div className="timer">{maxTime > 60 ? `${Math.floor(maxTime / 60)} : ${maxTime % 60}` : maxTime}</div>
        </>
    )
};

export default Timer;