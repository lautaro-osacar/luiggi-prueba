import React, { useEffect, useState } from "react";
import artistsJson from "../../artists.json";
import "./styles.css";
import ArtistLink from "../ArtistLink/ArtistLink";

const ArtistsList = ({ onHoverArtist, onHoverArtistEnd, isMobile }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ids = Object.keys(artistsJson);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div id="wrapper">
      {!isMobile && (
        <React.Fragment>
          <div className="artists-container">
            {[...ids].splice(0, ids.length / 2).map((id) => (
              <div className="artist-link-container" key={id}>
                <ArtistLink
                  id={id}
                  name={artistsJson[id].name}
                  photo={artistsJson[id].photo}
                  photoPosition={artistsJson[id].photoPosition}
                  onHover={() => onHoverArtist(artistsJson[id])}
                  onHoverEnd={onHoverArtistEnd}
                  mousePosition={mousePosition}
                />
              </div>
            ))}
          </div>
          <div className="artists-container">
            {[...ids].splice(-ids.length / 2).map((id) => (
              <div className="artist-link-container" key={id}>
                <ArtistLink
                  id={id}
                  name={artistsJson[id].name}
                  photo={artistsJson[id].photo}
                  photoPosition={artistsJson[id].photoPosition}
                  onHover={() => onHoverArtist(artistsJson[id])}
                  onHoverEnd={onHoverArtistEnd}
                  mousePosition={mousePosition}
                />
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
      {isMobile && (
        <div className="artists-container">
          {[...ids].sort().map((id) => (
            <div className="artist-link-container" key={id}>
              <ArtistLink
                id={id}
                name={artistsJson[id].name}
                photo={artistsJson[id].photo}
                photoPosition={artistsJson[id].photoPosition}
                onHover={() => onHoverArtist(artistsJson[id])}
                onHoverEnd={onHoverArtistEnd}
                mousePosition={mousePosition}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtistsList;
