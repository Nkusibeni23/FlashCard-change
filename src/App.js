import "./index.css";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "React is built using JavaScript.",
  },
  {
    id: 2,
    question: "Why do we need to install NodeJS for frontend development?",
    answer: "To run the npm commands",
  },
  {
    id: 3,
    question:
      "How does a developer become proficient in programming languages like Java and Python?",
    answer: "Through practice, patience, and dedication.",
  },
  {
    id: 4,
    question: "Which of these are not used as keywords in HTML?",
    answer: "<div>, <span>,<p>",
  },
  {
    id: 5,
    question: "Which one of this statement about Javascript is true? ",
    answer: "Javascript is a server-side scripting language.",
  },
  {
    id: 6,
    question: "what is react?",
    answer: "react is javascript library",
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCard />
    </div>
  );
}

function FlashCard() {
  const [selectedId, setSelectedId] = useState(5);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : "");
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
