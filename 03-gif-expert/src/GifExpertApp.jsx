import { useState } from "react";
import { AddCategory, GifCategory } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Qatar 2022",
    "Messi",
  ]);

  const onAddCategory = (newCategory) => {
    const formattedCategory = newCategory.trim().toLowerCase();
    if (!categories.includes(formattedCategory))
      setCategories([formattedCategory, ...categories]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(newCategory) => onAddCategory(newCategory)}
      ></AddCategory>

      {categories.map((cat) => (
        <GifCategory key={cat} category={cat}></GifCategory>
      ))}
    </div>
  );
};
