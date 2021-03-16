const GamingButton = (props) => {

    const renderButton = (buttonType) => {
        switch (buttonType) {
            case "correct": return <button onClick={props.answerProvided}>+</button>
            case "incorrect": return <button onClick={props.answerProvided}>-</button>
        }
    }

    return (
        <>
            {renderButton(props.type)}
        </>
    )
};

export default GamingButton;