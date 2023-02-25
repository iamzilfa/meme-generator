import React from "react";

const Header = () => {
  return (
    <div className="text-white p-[1.25rem] flex items-center Banner w-full h-[4.0625rem]">
      <img src="/images/face.png" alt="/" className="h-full mr-[6px]" />
      <h1 className="text-[1.25rem] mr-auto">Meme Generator</h1>
      <p className="text-[0.75rem] font-medium">React Course - Project 3</p>
    </div>
  );
};

export default Header;
