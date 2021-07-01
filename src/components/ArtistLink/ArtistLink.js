import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ArtistLink = ({
  photo,
  name,
  photoPosition,
  onHover,
  onHoverEnd,
  mousePosition,
}) => {
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [imageSize, setImageSize] = useState({ height: 0, width: 0 });

  const onMouseHover = () => {
    setIsMouseHover(true);
    onHover();
  };

  const onMouseHoverEnd = () => {
    setIsMouseHover(false);
    onHoverEnd();
  };

  const onLoad = (event) => {
    setImageSize({
      height: event.target.offsetHeight,
      width: event.target.offsetWidth,
    });
  };

  const getPosition = () => {
    let top = mousePosition.y;
    let left = mousePosition.x;
    if (photoPosition) {
      if (photoPosition.y === "middle") {
        top = top - imageSize.height / 2;
      }
      if (photoPosition.x === "left") {
        left = left - imageSize.width;
      }
    }
    return { top, left };
  };

  return (
    <React.Fragment>
      {isMouseHover && (
        <img
          alt={name}
          src={photo}
          className="image"
          style={{
            ...getPosition(),
          }}
          onLoad={onLoad}
        />
      )}
      <Link
        className="artist-link"
        to="/artist"
        onMouseEnter={(e) => onMouseHover()}
        onMouseLeave={() => onMouseHoverEnd()}
      >
        {name}
      </Link>
    </React.Fragment>
  );
};

export default ArtistLink;
