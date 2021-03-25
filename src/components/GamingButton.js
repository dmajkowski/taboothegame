import "../styles/GamingButton.css"

const GamingButton = (props) => {

    const renderButton = (buttonType) => {
        switch (buttonType) {
            case "correct": return <button className={`${buttonType}-btn`} onClick={props.answerProvided}><i class="fas fa-check fa-4x"></i></button>//zrobić to w funkcji generującej przyciski
            case "incorrect": return <button className={`${buttonType}-btn`} onClick={props.answerProvided}><i class="fas fa-times fa-4x"></i></button>
        }
    }

    return (
        <>
            {renderButton(props.type)}
        </>
    )
};

export default GamingButton;