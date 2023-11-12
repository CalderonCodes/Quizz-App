import React from 'react'

function AnswerCard({answer, onAnswerSelected, correctAnswer}) {
  const isCorrect = answer === correctAnswer;
  

  const handleAnswer = () => {
    onAnswerSelected(isCorrect, answer);
  };

  return (
    <button onClick={handleAnswer} className={`btn btn-outline text-lg btn-default justify-start w-full hover:border-accent border-2 hover:text-accent hover:bg-base-100 hover:underline `}>{answer}</button>
  )
}

export default AnswerCard
