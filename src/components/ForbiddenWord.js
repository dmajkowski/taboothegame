import '../styles/ForbiddenWord.css'

const ForbiddenWord = ({ forbiddenWord }) => {
    return (
        <div className="forbiddenword">{forbiddenWord.toUpperCase()}</div>
    );
}

export default ForbiddenWord;