import React from 'react'

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='h-screen flex font-Kalam bg-base-200 flex-col lg:flex-row bg-pattern px-5 lg:px-0  gap-5 justify-center items-center'>
        <img src="assets/notfound.png" alt="" />
        <div className='lg:text-7xl text-center lg:text-left text-5xl font-bold'>

        <h1 >404 </h1>
        <h1 >Not found</h1>
        <Link to={"/"} className='text-2xl hover:underline'>Go back?</Link>
        </div>
    </div>
  )
}

export default NotFound