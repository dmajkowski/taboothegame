import { useState } from 'react';

const TimerComponent = () => {

    const [timer, setTimer] = useState(100);

    function startTimer(maxTime) {
        setInterval(() => {
            if (maxTime !== 0) {
                maxTime--;
                setTimer(maxTime);
            }
        }, 1000);

    };

    return (
        <>
            <div className="timer">{timer > 60 ? `${Math.floor(timer / 60)} : ${timer % 60}` : timer}</div>
        </>
    )
};

export default TimerComponent;