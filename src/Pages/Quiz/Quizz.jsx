import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../Services/quizService";
import AnswerCard from "../../Components/Answers/AnswerCard";
import QuizContainer from "../../Components/Container/QuizContainer";

function Quizz() {
  const [loading, setLoading] = useState(true);
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
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen bg-pattern flex font-Kalam bg-base-200 flex-col justify-center items-center">
      {!loading && <QuizContainer questions={questions}/>}
    </div>
  );
}

export default Quizz;
