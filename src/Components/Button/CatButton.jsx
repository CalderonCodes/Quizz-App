import React from "react";

function CatButton({ category }) {
  return <button className="btn btn-outline btn-accent">{category.name}</button>;
}

export default CatButton;
