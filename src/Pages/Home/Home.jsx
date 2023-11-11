import React from "react";
import CatButton from "../../Components/Button/CatButton";

function Home() {
  return (
    <div className="h-screen flex font-Kalam flex-col justify-center items-center">
      <h1 className="text-bold text-5xl">Quizz time!! </h1>
      <h2 className="text-bold text-3xl m-5">Select category </h2>
      <div className="grid grid-cols-4 mt-10 w-full px-2 gap-3 ">
        <CatButton />
        <CatButton />
        <CatButton />
        <CatButton />
        <CatButton />
        <CatButton />
        <CatButton />
        <CatButton />
        <CatButton />
        <CatButton />
        <CatButton />
        <CatButton />
      </div>
    </div>
  );
}

export default Home;
