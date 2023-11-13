import React from 'react'
import AttemptContainer from '../../Components/Container/AttemptContainer'

function StatList() {
  return (
    <div className="h-screen flex font-Kalam bg-base-200  bg-pattern flex-col justify-center items-center">
      <h1 className="text-bold text-5xl lg:text-6xl">Your attempts </h1>
      <AttemptContainer/>
    </div>
  )
}

export default StatList