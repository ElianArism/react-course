import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const category = inputValue.trim();
    if (!category) return;
    onNewCategory(category);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
