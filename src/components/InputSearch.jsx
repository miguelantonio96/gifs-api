import React, { useContext } from "react";
import ButtonAddGif from "./ButtonAddGif";
import { context } from "../Context/ContextProvider";

const InputSearch = ({ placeholder, name, type, className }) => {
  const { handleSubmit, inputValue, handleChange } = useContext(context);

  return (
    <form className="form-container">
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        value={inputValue}
        className={className}
        onChange={handleChange}
      ></input>
      <ButtonAddGif
        text="Add New Gif"
        type="button"
        className="btn-add-gif"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default InputSearch;
