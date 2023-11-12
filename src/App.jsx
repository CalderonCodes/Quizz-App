import Home from "./Pages/Home/Home"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Quizz from "./Pages/Quiz/Quizz"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/:id" Component={Quizz} />
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
