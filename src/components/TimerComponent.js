import {useState} from 'react';

import ForbiddenWordComponent from './ForbiddenWordComponent';
import GuessWordComponent from './GuessWordComponent';

import '../styles/TimerComponent.css';

const TimerComponent = (props) =>{

    const [timer, setTimer] = useState(props.maxTime);

    function startTimer(maxTime){
        props.openPopup();
        
        setInterval(()=>{
            if(maxTime!==0){
                maxTime--;
                setTimer(maxTime);
            } 
        },1000);

    };

    return (
        <>
            <div className="timer">{timer}</div>
            <button onClick={()=>{startTimer(props.maxTime)}}>Start game</button>
        </>
    )
};

export default TimerComponent;