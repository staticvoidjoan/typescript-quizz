import { useState } from "react";
import "./Question.css"
type QuestionProps = {
  question: string;
  answer: string;
};

export default function Question({question, answer}: QuestionProps) {
    const [hidden,toggleHidden] = useState(true);

  return (
    <article className="question">
        <header>{question}</header>
        <p className="answer">
            <span className={hidden ? 'blurred': 'visible'}>{answer}</span>
        </p>
        <footer>
            <button className="button-19" onClick={() => toggleHidden(!hidden)}>Toggle Answer</button>
        </footer>
    </article>
  )
}
