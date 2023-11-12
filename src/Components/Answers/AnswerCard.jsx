import React from 'react'

function AnswerCard({answer}) {
  return (
    <button className="btn btn-outline text-lg btn-default justify-start w-full hover:border-primary border-2 hover:text-primary hover:bg-base-100  hover:underline">{answer}</button>
  )
}

export default AnswerCard
