import React, { useEffect, useState } from "react";
import HomeButton from "../../Components/Button/HomeButton";

import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigateToQuiz = () => {
    navigate(`/quiz`);
  };

  const navigateToAttempts = () => {
    navigate(`/attempts`);
  };
  return (
    <div className="h-screen flex font-Kalam bg-base-200  bg-pattern flex-col gap-5 justify-center items-center">
      <h1 className="text-bold text-5xl lg:text-6xl">Trivia Quiz!! </h1>
      <div className="flex justify-center w-full px-4 lg:px-16 gap-3 ">
        <HomeButton value={"Start"} handleClick={navigateToQuiz} />
        <HomeButton value={"My attempts"}  handleClick={navigateToAttempts}/>
      </div>

      <div >Coded by <a className="underline italic" href="https://github.com/CalderonCodes">Christopher Calderon</a>.</div>
    </div>
  );
}

export default Home;
