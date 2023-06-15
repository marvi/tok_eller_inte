
function Choice({question, toggleAnswer}) {                                                                                                                                                                                                   
    return (
        <div className="question-card">
        <div className="question">{question.question}</div>
      <div className="toggle-button-cover">
        <div className="button-cover">
          <div className="button r button-1">
            <input type="checkbox"
                   defaultChecked={question.answer}
                   value={question.answer}
                   onChange={() => toggleAnswer}
                   className="checkbox" />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Choice;     
