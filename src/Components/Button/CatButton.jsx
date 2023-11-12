import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CatButton({ category }) {
const navigate = useNavigate();

const handleClick = () => {
  navigate(`${category.id}`);
};

  return <button className="btn btn-outline  btn-default  hover:border-accent border-2 hover:text-accent hover:bg-base-200 hover:underline " onClick={handleClick}>{category.name}</button>;
}

export default CatButton;
