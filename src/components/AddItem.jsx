import { useState } from "react";

const AddItem = () => {
    const[thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

    const handleClick = () => setThingsArray(prevArray => {
        return [...prevArray, `Thing ${prevArray.length + 1}`]
    })
    const thingsElements = thingsArray.map(item => <p key={item}>{item}</p>) 

    
  return (
    <div className=" bg-[#70B85D] text-[white] text-[1.3rem] p-5">
      {/* <button onClick={() => setThingsArray(prevArray => {return [...prevArray, `Thing ${prevArray.length +1}`]})} className="w-full bg-transparent text-[white] cursor-pointer mb-5 p-4 rounded-[50px] border-2 border-solid border-[white]">Add Item</button> */}
      <button onClick={handleClick} className="w-full bg-transparent text-[white] cursor-pointer mb-5 p-4 rounded-[50px] border-2 border-solid border-[white]">Add Item</button>
      {thingsElements}
    </div>
  );
};

export default AddItem;
