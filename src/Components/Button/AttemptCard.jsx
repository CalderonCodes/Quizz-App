import React from 'react'

function AttemptCard({attempt}) {
  return (
    <div className='btn btn-outline text-lg btn-default justify-between px-10 w-full hover:border-accent border-2 hover:text-accent hover:bg-base-100 hover:underline'>
        <p>Date</p>
        <p>Score</p>
    </div>
  )
}

export default AttemptCard