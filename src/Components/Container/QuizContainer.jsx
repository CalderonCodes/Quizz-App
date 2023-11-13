import React, { useEffect, useState } from "react";
import AnswerCard from "../Answers/AnswerCard";
import Timer from "../Timer/Timer";
import { v4 as uuidv4 } from 'uuid';
import useStore from "../../quizStore";
import FinishButton from "../Button/FinishButton";
import { Link } from "react-router-dom";

function QuizContainer({ questions }) {
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState(0);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [attempt, setAttempt] = useState({
    id: 0,
    date: '00/00/00',
    preguntas: [],
    respuestas: [],
    score: 0,
  });
  
  const { attempts, addAttempt, removeAttempt } = useStore();



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


  const handleTimeout = (isTimeout) => {
    if (isTimeout) {
      setCompleted(true);
      console.log("timeout");
          }
  };

  const handleAnswerSelected = (isCorrect, answer) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      if (currentQuestion < 14) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswers([...answers, answer]);
      }else{
        
        setAnswers([...answers, answer]);
        setCompleted(true);
      }
    } else {
      
      setAnswers([...answers, answer]);
      if (currentQuestion < 14) {
        setCurrentQuestion(currentQuestion + 1);
      }else{
        setCompleted(true);
      }
    }
  };

  const handleAttempt = () => {
    setAttempt({
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
      preguntas: questions.map((question) => question.question),
      respuestas: answers,
      score: ((correctAnswers / 15)* 10).toFixed(3).slice(0, 3),
    });
  };

  const saveAttempt = () => { 

    addAttempt(attempt);
  };

  useEffect(() => {
    handleAttempt();
  }, [completed]);



  useEffect(() => {
    handleAnswer();
  }, [questions, currentQuestion]);

  const handleTest = () => {
    console.log(attempt);
    console.log(attempts);
  };

 
  return (
    <div className="lg:w-1/2 w-11/12  relative min-h-3/5 bg-base-100 shadow-xl">
      {!completed  &&  (
        <div className="card-body  flex flex-col justify-center ">
          <h2 className="card-title">Question {currentQuestion + 1} / 15</h2>
          <div className="flex">
            
          <p className="text-base text-accent">
            {questions[currentQuestion].difficulty}
          </p>
          
          <Timer onTimeout={handleTimeout} />
          </div>
          <p className="text-xl">{questions[currentQuestion].question}</p>
          {!loading && (
            <div className="flex flex-col gap-3">
              {currentAnswers
                .slice()
                .sort(() => Math.random() - 0.5)
                .map((answer) => (
                  <AnswerCard
                  key={uuidv4()}
                    answer={answer}
                    onAnswerSelected={handleAnswerSelected}
                    correctAnswer={currentCorrectAnswer}
                  />
                ))}
            </div>
          )}
        </div>
      )}
{completed  && (
        <div className="card-body  h-full flex flex-col justify-center items-center ">
          <h2 className="card-title text-5xl  mt-10">Completed!</h2>
          <p className=" text-accent text-2xl">
            Correct answers: {correctAnswers}
          </p>
          <button onClick={handleTest}>gg</button>
          <p  className="text-2xl">Score: </p>
          <p className="text-9xl font-bold text-center">
          {((correctAnswers / 15)* 10).toFixed(3).slice(0, 3)  }
          </p>
          <Link to={"/"} onClick={saveAttempt} className='btn btn-outline text-lg btn-default justify-start  hover:border-accent border-2 hover:text-accent hover:bg-base-100 hover:underline '>Done</Link>
  
        </div>
      )}
    </div>
  );
}

export default QuizContainer;