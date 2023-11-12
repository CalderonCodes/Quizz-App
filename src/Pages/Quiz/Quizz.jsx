import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../Services/quizService";
import AnswerCard from "../../Components/Answers/AnswerCard";

function Quizz() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { id: categoryId } = useParams();

  const getData = async () => {
    try {
      setLoading(true);
      const responseEasy = getQuestions(categoryId, 8, "easy");
      const responseMedium = getQuestions(categoryId, 5, "medium");
      const responseHard = getQuestions(categoryId, 2, "hard");

      const [resultEasy, resultMedium, resultHard] = await Promise.all([
        responseEasy,
        responseMedium,
        responseHard,
      ]);

      const quiz = [
        ...resultEasy.results,
        ...resultMedium.results,
        ...resultHard.results,
      ];

      if (quiz) {
        setQuestions(quiz);
      }
      setLoading(false);
      console.log(questions[currentQuestion]);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  const handleNextQuestion = () => {
    console.log(questions[currentQuestion].question);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen flex font-Kalam bg-base-200 flex-col justify-center items-center">
      <div className="lg:w-1/2 w-11/12 relative h-3/5 bg-base-100 shadow-xl">
         <div className="card-body  flex flex-col justify-center ">
          <h2 className="card-title">Pregunta 1</h2>
          <p className="text-base text-accent text-right">Facil</p>
          <p className="text-xl">If a dog chews shoes whose shoes does he choose?</p>
          <AnswerCard/>
          
          <AnswerCard/>
          
          <AnswerCard/>
        </div>
        
        <div className="card-actions  absolute right-10 bottom-10">
            <button onClick={handleNextQuestion} className="btn btn-primary">Prev</button>
            <button onClick={handleNextQuestion} className="btn btn-primary">Next</button>
          </div>
      </div>
    </div>
  );
}

export default Quizz;
