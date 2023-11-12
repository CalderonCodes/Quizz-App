import React, { useEffect, useState } from "react";
import AnswerCard from "../Answers/AnswerCard";

function QuizContainer({ questions }) {
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswers, setCurrentAnswers] = useState(0);
  
    const handleNextQuestion = () => {
        
      setCurrentQuestion(currentQuestion + 1);
    };
    const handlePrevQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
    };
  
    const handleAnswer = () => {
      const correctAnswers = questions[currentQuestion].correct_answer;
      const incorrectAnswers = questions[currentQuestion].incorrect_answers;
      const answers = [...incorrectAnswers, correctAnswers];
      if (answers) {
        setCurrentAnswers(answers);
      }
      console.log(currentAnswers);
      setLoading(false);
    };
  
    useEffect(() => {
      handleAnswer();

    }, [questions, currentQuestion]);
  

  return (
    <div className="lg:w-1/2 w-11/12 relative min-h-3/5 bg-base-100 shadow-xl">
      <div className="card-body  flex flex-col justify-center ">
        <h2 className="card-title">Pregunta {currentQuestion + 1}</h2>
        <p className="text-base text-accent text-right">
          {questions[currentQuestion].difficulty}
        </p>
        <p className="text-xl">{questions[currentQuestion].question}</p>
        {!loading && <div className="flex flex-col gap-3">
          {currentAnswers.map((answer) => (
            <AnswerCard answer={answer} />
          ))}
          <AnswerCard answer={questions[currentQuestion].correct_answer} />
        </div>}
      </div>

      <div className="card-actions  justify-end px-10 pb-5">
        {currentQuestion > 0 && (
          <button onClick={handlePrevQuestion} className="btn btn-primary">
            Prev
          </button>
        )}
        <button onClick={handleNextQuestion} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
}

export default QuizContainer;
