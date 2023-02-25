import React, { useState } from "react";
import exampleData from "../exampleData.js"

const Meme = () => {
  const[meme, setMeme] = useState({
      topText : "", 
      bottomText : "", 
      randomImage : "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages,setAllMemeImages] = useState(exampleData)

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prevMeme => {
      return ({...prevMeme, randomImage: url})
    })    
}
  return (
    <div className="p-9">
      <div className="mt-4 grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="Shut up"
          className="border border-[#D5D4D8] indent-[5px] py-2 rounded-[5px] indet-[5px]"
        />
        <input
          type="text"
          placeholder="and take my money"
          className="border indent-[5px] border-[#D5D4D8] rounded-[5px] "
        />
        <button onClick={getMemeImage} className="btn text-white col-span-2 border p-[10px] rounded-[5px] cursor-pointer">
          Get a new meme image 🖼
        </button>
        <img src={meme.randomImage} alt="image" className="w-full"  />
      </div>
    </div>
  );
};

export default Meme;
