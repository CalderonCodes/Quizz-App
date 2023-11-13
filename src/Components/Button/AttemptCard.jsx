import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";

function AttemptCard({attempt}) {

  const navigate = useNavigate();

const handleClick = () => {
  navigate(`${attempt.id}`);
};

  return (
    <div  onClick={handleClick} className='btn btn-outline text-lg btn-default justify-between px-10 w-full hover:border-accent border-2 hover:text-accent hover:bg-base-100 hover:underline'>
        <p>{attempt.date}</p>
        <p>{attempt.score}</p>
    </div>
  )
}

export default AttemptCard