import '../styles/WordBox.css'

const WordBox = ({ words }) => {
    //TUTAJ PRZEKAZAĆ JUŻ OSOBNE SŁOWO ZAKAZANE I DO ZGADNIECIA
    return (
        <div className="wordbox">
            <div></div>
            <div>
                FORBIDDEN WORDS
            </div>
        </div>
    )
};

export default WordBox;