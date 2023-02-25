import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { data } from "./data/data";
// import Boxes from "./components/Boxes";
// import Headings from "./data/headings";
// import JohnObject from "./components/JohnObject";
// import AddItem from "./components/AddItem";
// import Header from "./components/Header";
// import Meme from "./components/Meme";
// import { headings } from "./data/headings";
// import Heading from "./components/Heading";

function App() {
  // const [data, setData] = useState(headings);

  // const handleClick = (id) => {
  //   setData((prevData) => {
  //     return prevData.map((heading) => {
  //       return heading.id === id
  //         ? { ...heading, isStyled: !heading.isStyled }
  //         : heading;
  //     });
  //   });
  // };

  const handleClick = () => {
    console.log("Clicked!")
  }



  return (
    <div>
      {/* <Header /> */}
      {/* <Meme /> */}
      {/* <AddItem /> */}
      {/* <JohnObject /> */}
      {/* <Boxes  /> */}
      {/* {data.map((heading) => (
        <Heading key={heading.id} {...heading} handleClick={handleClick} />
      ))} */}

      {data.map(datum => (
        <TodoList key={datum.id} name={datum.fruit} handleClick={handleClick} />
      ))}
      
    </div>
  );
}

export default App;
