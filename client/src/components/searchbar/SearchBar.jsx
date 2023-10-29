import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      if (input.length) {
        onSearch(input);
      }
      setInput("");
    }
  };

  const handleOnInput = (e) => {
    setInput(e.target.value);
  };

  const handleOnClick = () => {
    if (input.length) {
      onSearch(input);
    }
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleOnInput}
        onKeyDown={pressEnter}
        value={input}
      />
      <button onClick={handleOnClick}>Buscar</button>
    </div>
  );
};

export default SearchBar;
