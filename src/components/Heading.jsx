const Heading = ({ id, isStyled, handleClick }) => {
  return (
    <h1
      onClick={() => handleClick(id)}
      className={`${isStyled ? "line-through" : ""}`}
    >
      Hello World
    </h1>
  );
};
export default Heading;
