import React, { useState } from "react";
import BoxRow from "./BoxRow";

const Addcards = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
      setShowInput(true);
    }
  };

  const handleShowInput = () => {
    setShowInput(true);
  };

  return (
    <div className="bg-gray-200 h-screen p-4 px-16">
      <div className="inline-block">
        {items.map((item, index) => (
          <BoxRow key={index} title={item} />
        ))}
      </div>

      {showInput && (
        <div className="flex flex-col ">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter an item"
            className=" py-2 mb-2 bg-gray-200 w-44 border border-gray-100 rounded focus:outline-none"
          />
          <button
            onClick={handleAddItem}
            className=" py-2 w-36 text-black rounded "
          >
            + Add New Item
          </button>
        </div>
      )}

      {!showInput && (
        <button
          onClick={handleShowInput}
          className=" py-2  text-black rounded "
        >
          + Add New Item
        </button>
      )}
    </div>
  );
};

export default Addcards;
