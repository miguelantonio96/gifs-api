import { createContext, useEffect, useState } from "react";
export const context = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState();
  const apiUrl = `https://api.giphy.com/v1/gifs/search`;

console.log({inputValue})

  const datos = async (inputValue) => {
    const response = await fetch(
      `${apiUrl}?api_key=YwUScO9CKUsUArVSn5493LJYgfW7YAUM&q=${inputValue}&limit=10`
    );
    const { data } = await response.json();
    // if (inputValue === "") {
      //   setData([]);
      //   return; // No need to fetch if inputValue is empty
      // }
      
      setData(data);
    };
    console.log({data})
    
  useEffect(() => {
    // Fetch data from API on component mount
    datos();
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (
  //     data.find((value) => value.toLowerCase() === inputValue.toLowerCase())
  //   ) {
  //     alert("Category already exists");
  //     return;
  //   }
  //   setData([...data, inputValue]);
  //   setInputValue("");
  // };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <context.Provider value={{ data, inputValue, setData, handleChange }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
