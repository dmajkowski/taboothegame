import ForbiddenWordComponent from './ForbiddenWordComponent';
import GuessWordComponent from './GuessWordComponent';

import '../styles/TabooWordComponent.css';

const TabooWordComponent = (props) =>{
    return (
    <div className='wrapper'>
        <GuessWordComponent guessWords={props.guessWords}/>
        <p>Zakazane słowa</p>
        <ul>
            <ForbiddenWordComponent forbiddenWord={props.guessWords[0].forbiddenWords[0]}/>
            <ForbiddenWordComponent forbiddenWord={props.guessWords[0].forbiddenWords[1]}/>
            <ForbiddenWordComponent forbiddenWord={props.guessWords[0].forbiddenWords[2]}/>
            <ForbiddenWordComponent forbiddenWord={props.guessWords[0].forbiddenWords[3]}/>
        </ul>
    </div>
    )
};

export default TabooWordComponent;