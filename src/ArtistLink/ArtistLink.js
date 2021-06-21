import React, { useState, useEffect } from "react";
import "./styles.css";

const ArtistLink = ({ photo, name, onHover, onHoverEnd, mousePosition }) => {
  const [isMouseHover, setIsMouseHover] = useState(false);

  const onMouseHover = (event) => {
    setIsMouseHover(true);
    onHover();
  };

  const onMouseHoverEnd = () => {
    setIsMouseHover(false);
    onHoverEnd();
  };

  return (
    <React.Fragment>
      {isMouseHover && (
        <img
          alt={name}
          src={photo}
          className="image"
          style={{ top: mousePosition.y, left: mousePosition.x }}
        />
      )}
      <span
        className="artist-link"
        href="#"
        onMouseEnter={(e) => onMouseHover(e)}
        onMouseLeave={() => onMouseHoverEnd()}
      >
        {name}
      </span>
    </React.Fragment>
  );
};

export default ArtistLink;
