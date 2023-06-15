import { useState } from 'react';
import './App.css';
import Choice from './Choice';
import questions from './Questions'

function App() {
    const [qs, setQs] = useState(questions)

    const toggleAnswer = (qid) => {
        const updatedQs = qs.map(q => {
            if(q.id === qid) {
                return {...q, flag: !q.answer};
            } else {
                return q;
            }
        })
        setQs(updatedQs);
    }
    
    return (
        <>
        <div className="questions">
          {qs.map((q) => { 
              return <Choice key={q.qid} question={q} toggleAnswer={toggleAnswer}/>
          })}
        </div>
          <button className="calculate-button">Beräkna tokfaktor</button>
        </>
    );
}

export default App
