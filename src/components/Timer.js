import { useState, useEffect } from 'react';

const Timer = (props) => {

    const [maxTime, setMaxTime] = useState(props.maxTime);
    const [timerInterval, setTimerInterval] = useState(props.maxTime);

    useEffect(() => {
        function countAnswerTime() {
            let currentTime = maxTime;
            setTimerInterval(setInterval(() => {
                currentTime > 0 && currentTime--;
                setMaxTime(currentTime);
                props.changeActiveTeam(currentTime);
                currentTime === 0 && window.clearInterval()
                currentTime === 0 && setMaxTime(props.maxTime)
            }, 1000))
        };

        props.startTimer && countAnswerTime();
        return function cleanup() {
            timerInterval && window.clearInterval(timerInterval);
        };
    }, [props.startTimer]);

    return (
        <>
            <div className="timer">{maxTime > 60 ? `${Math.floor(maxTime / 60)} : ${maxTime % 60}` : maxTime}</div>
        </>
    )
};

export default Timer;