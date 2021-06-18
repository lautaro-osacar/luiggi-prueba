import { useState } from "react";

const Item = ({ img, animalName, onHover, onHoverEnd }) => {
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseOver = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    setIsMouseHover(true);
    onHover();
  };

  const onMouseOverEnd = () => {
    setIsMouseHover(false);
    onHoverEnd();
  };

  return (
    <div
      className="list-content"
      onMouseEnter={(e) => onMouseOver(e)}
      onMouseLeave={() => onMouseOverEnd()}
    >
      <span className="list-text">{animalName}</span>
      {isMouseHover && (
        <img
          alt={animalName}
          src={img}
          id={`${animalName - img}`}
          className="image"
          style={{ top: mousePosition.y, left: mousePosition.x }}
        />
      )}
    </div>
  );
};

export default Item;
