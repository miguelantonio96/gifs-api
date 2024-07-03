import React from "react";

const ButtonAddGif = ({onClick, type, className, text}) => {
  return <button type={type} className={className} onClick={onClick}>{text}</button>;
};

export default ButtonAddGif;
