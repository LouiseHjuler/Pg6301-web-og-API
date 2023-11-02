import * as React from "react";
import * as ReactDOM from "react-dom";
import {useState} from "react";

import {isCorrectAnswer, Questions, randomQuestion} from "./questions";
function Quiz(){
    const [question, setQuestion] = useState(randomQuestion());
    const [result, setResult] = useState();

    const answerButtons = [];

    //for in lets you browse elements in an object
    //T: "iterate over properties"
    // use the object as an array
    for (const answersKey in question.answers) {
        if (question.answers [answersKey] != null){
            answerButtons.push(<button onClick = { () => evaluateQuestion(answersKey)}>
                {question.answers[answersKey]}
            </button>);
        }
    }
    function evaluateQuestion(answersKey){
        if (isCorrectAnswer(question, answersKey)){
            setResult("Riktig");
        } else {setResult("feil");
        }
    }
    //console.log(answerButtons); get response in console (F12)

    // {[...answerButtons]} er unpacking / unwrapping // destructuring
    return <>
        <h1>
            {question.question}
        </h1>
        {[...answerButtons]}
        {result}
        <button onClick = {() => {setQuestion(randomQuestion); setResult(null)}}>Nytt spørgsmål?
        </button>
    </>;


}

ReactDOM.render(<Quiz/>, document.getElementById("root"));

