import React  from "react";

const BoxTwo = (props) => {
  

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return (
    <div
      onClick={props.handleClick(props.id)}
      style={styles}
      className="w-[6.25rem] h-[6.25rem] inline-block border mr-[0.125rem] rounded-[0.3125rem]"
    ></div>
  );
};

export default BoxTwo;
