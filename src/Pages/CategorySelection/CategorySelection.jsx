import React, { useEffect, useState } from "react";
import CatButton from "../../Components/Button/CatButton";
import {getCategories} from "../../Services/quizService";


function CategorySelection() {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])

    const getData = async () => {
        
            try {
            setLoading(true);
            let response = await getCategories();
            if (response) {
                setCategories(response.trivia_categories);
            } 
            setLoading(false);
            } catch (error) {
            console.error('Error al obtener datos de la API:', error);
            }
    };

    useEffect(() => {
        getData();
    }, []);
  return (
    <div className="h-screen flex font-Kalam bg-base-200  bg-pattern flex-col justify-center items-center">
      <h2 className="text-bold text-3xl m-2">Select a category </h2>
      <div className="grid grid-cols-3 mt-5 w-full px-2 lg:px-16 gap-3 ">

      {categories.map((category) => (
                 <CatButton key={category.id} category={category}/>
              ))}
      </div>
    </div>
  );
}

export default CategorySelection;
