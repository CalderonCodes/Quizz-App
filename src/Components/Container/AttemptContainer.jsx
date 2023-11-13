import React from 'react'
import AttemptCard from '../Button/AttemptCard'
import useStore from "../../quizStore";

function AttemptContainer() {
    const { attempts } = useStore();

  return (
    
    <div className='lg:w-1/2 w-11/12 p-5 flex overflow-y-auto flex-col gap-2 relative h-4/5 bg-base-100 mt-3 shadow-xl'>
        
        {attempts.map((attempt) => (
                 <AttemptCard key={attempt.id} attempt={attempt}/>
              ))}
    </div>
  )
}

export default AttemptContainer