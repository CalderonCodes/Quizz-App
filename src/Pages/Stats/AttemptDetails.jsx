import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStore from "../../quizStore";

import { v4 as uuidv4 } from 'uuid';

function AttemptDetails() {
    
  const { id: attemptId } = useParams();
  const { attempts } = useStore();
  const attempt = attempts.find((attempt) => attempt.id === attemptId);

  const questionPairs = attempt.preguntas.map((pregunta, index) => ({
    pregunta,
    respuesta: attempt.respuestas[index], 
  }));

  return (
    <div className="h-screen flex font-Kalam bg-base-200  bg-pattern flex-col justify-center items-center">
        <h1 className="text-bold text-center text-3xl lg:text-5xl">Attempt date: {attempt.date} </h1>
        <div className="lg:w-1/2 w-11/12 p-5 flex flex-col overflow-y-auto gap-2 relative h-4/5 bg-base-100 shadow-xl">
            
            {questionPairs.map(({ pregunta, respuesta }, index) => (
            <div key={uuidv4()}>
                <h1>
                {index + 1}. {pregunta}
                </h1>
                <p className="text-accent">
                      {respuesta}
                </p></div>
          ))}
          <p className="text-end font-bold text-accent text-xl lg:text-3xl underline ">Score {attempt.score}</p>
        </div>

    </div>
  )
}

export default AttemptDetails