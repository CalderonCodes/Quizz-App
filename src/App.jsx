import Home from "./Pages/Home/Home"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Quizz from "./Pages/Quiz/Quizz"
import StatList from "./Pages/Stats/StatList"
import AttemptDetails from "./Pages/Stats/AttemptDetails"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/:id" Component={Quizz} />
        <Route path="/attempts" Component={StatList} />
        <Route path="/attempts/:id" Component={AttemptDetails} />
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
