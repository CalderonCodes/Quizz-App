
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../Services/quizService";

function Quizz() {

    const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const { id: categoryId } = useParams();


  const getData = async () => {
        
    try {
    setLoading(true);
    const responseEasy = getQuestions(categoryId, 8, "easy");
    const responseMedium = getQuestions(categoryId, 5, "medium");
    const responseHard = getQuestions(categoryId, 2, "hard");

    const [resultEasy, resultMedium , resultHard] = await Promise.all([responseEasy, responseMedium ,responseHard]);

    const quiz = [...resultEasy.results, ...resultMedium.results,  ...resultHard.results];

    if (quiz) {
        setQuestions(quiz);
    } 
    setLoading(false);
console.log(quiz);
    } catch (error) {
    console.error('Error al obtener datos de la API:', error);
    }
};

useEffect(() => {
getData();
}, []);

  return (
    <div>Quizz</div>
  )
}

export default Quizz