import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";

function FinishButton({onClick}) {
    const navigate = useNavigate();

const handleClick = () => {
  navigate(`/`);
};
  return (
    <button onClick={handleClick} className='btn btn-outline text-lg btn-default justify-start  hover:border-accent border-2 hover:text-accent hover:bg-base-100 hover:underline '>Done</button>
  )
}

export default FinishButton