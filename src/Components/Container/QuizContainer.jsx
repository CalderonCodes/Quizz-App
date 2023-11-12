import React, { useEffect, useState } from "react";
import AnswerCard from "../Answers/AnswerCard";

function QuizContainer({ questions }) {
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState(0);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [completed, setCompleted] = useState(false);

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
      setCurrentCorrectAnswer(correctAnswers);
      setCurrentAnswers(answers);
    }
    setLoading(false);
  };

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) {
      console.log("Respuesta Correcta");
      setCorrectAnswers(correctAnswers + 1);
      if (currentQuestion < 14) {
        setCurrentQuestion(currentQuestion + 1);
      }else{
        setCompleted(true);
      }
    } else {
      console.log("Respuesta Incorrecta");
      if (currentQuestion < 14) {
        setCurrentQuestion(currentQuestion + 1);
      }else{
        setCompleted(true);
      }
    }
  };

  useEffect(() => {
    handleAnswer();
  }, [questions, currentQuestion]);

  return (
    <div className="lg:w-1/2 w-11/12 relative min-h-3/5 bg-base-100 shadow-xl">
      {!completed && (
        <div className="card-body  flex flex-col justify-center ">
          <h2 className="card-title">Pregunta {currentQuestion + 1} de 15</h2>
          <p className="text-base text-accent text-right">
            {questions[currentQuestion].difficulty}
          </p>
          <p className="text-xl">{questions[currentQuestion].question}</p>
          {!loading && (
            <div className="flex flex-col gap-3">
              {currentAnswers
                .slice()
                .sort(() => Math.random() - 0.5)
                .map((answer) => (
                  <AnswerCard
                    answer={answer}
                    onAnswerSelected={handleAnswerSelected}
                    correctAnswer={currentCorrectAnswer}
                  />
                ))}
            </div>
          )}
        </div>
      )}
{completed && (
        <div className="card-body  h-full flex flex-col justify-center items-center ">
          <h2 className="card-title text-4xl mt-10">Examen Terminado!</h2>
          <p className=" text-accent text-2xl">
            Respuestas Correctas: {correctAnswers}
          </p>
          <p className="text-2xl">Calificacion: </p>
          <p className="text-9xl font-bold text-center">
          {((correctAnswers / 15)* 10).toFixed(3).slice(0, 3)  }
          </p>
        </div>
      )}
    </div>
  );
}

export default QuizContainer;
