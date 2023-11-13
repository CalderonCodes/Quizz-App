import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";

function HomeButton({value, handleClick}) {
  return (
    <button onClick={handleClick} className='btn btn-outline text-lg lg:w-1/6 w-1/2 btn-default justify-center  hover:border-accent border-2 hover:text-accent hover:bg-base-200 hover:underline '>{value}</button>
  
  )
}

export default HomeButton