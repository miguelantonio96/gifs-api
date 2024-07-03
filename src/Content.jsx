import { useContext } from "react";
import { context } from "./Context/ContextProvider";

const Content = () => {
  const { data } = useContext(context);
 
 
  if (data.length === 0) return <h2>Loading...</h2>;

  return (
    <ul className="gif-container">
      {data?.map((data) => (
        <div key={data.url}>
          <h2>{data.title}</h2>
          <img className="gif-image" src={data.images.original.url} alt={data.title} />
        </div>
      ))}
    </ul>
  );
};

export default Content;
