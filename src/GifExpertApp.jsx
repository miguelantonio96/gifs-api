
import InputSearch from "./components/InputSearch";
import Content from "./Content";
import "./GifExpertApp.css";


const GifExpertApp = () => {
  
  return (
    <div className="main">
      
      <h1>Gif Expert App</h1>
     
      <InputSearch
        className="input-search"
        type="search"
        name="search"
        placeholder="Search Gif..."
      />  
      
      <Content />
      
    </div>
  );
};

export default GifExpertApp;
