import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CatButton({ category }) {
const navigate = useNavigate();

const handleClick = () => {
  navigate(`${category.id}`);
};

  return <button className="btn btn-outline btn-accent  border-2 " onClick={handleClick}>{category.name}</button>;
}

export default CatButton;
