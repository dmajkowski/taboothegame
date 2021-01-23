
import '../styles/GuessWordComponent.css';

const GuessWordComponent = (props) =>{
    return (
    <>
        <div>{props.guessWords[0].word}</div>
    </>
    )
};

export default GuessWordComponent;