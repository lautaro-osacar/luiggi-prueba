import { useEffect, useState } from "react";
import artistsJson from "../../artists.json";
import "./styles.css";
import ArtistLink from "../ArtistLink/ArtistLink";

const ArtistsList = ({ onHoverArtist, onHoverArtistEnd }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const names = Object.keys(artistsJson);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div id="wrapper">
      <div className="artists-container">
        {[...names].splice(0, names.length / 2).map((name) => (
          <div className="artist-link-container" key={name}>
            <ArtistLink
              name={name}
              photo={artistsJson[name].photo}
              photoPosition={artistsJson[name].photoPosition}
              onHover={() => onHoverArtist(artistsJson[name])}
              onHoverEnd={onHoverArtistEnd}
              mousePosition={mousePosition}
            />
          </div>
        ))}
      </div>
      <div className="artists-container">
        {[...names].splice(-names.length / 2).map((name) => (
          <div className="artist-link-container" key={name}>
            <ArtistLink
              name={name}
              photo={artistsJson[name].photo}
              photoPosition={artistsJson[name].photoPosition}
              onHover={() => onHoverArtist(artistsJson[name])}
              onHoverEnd={onHoverArtistEnd}
              mousePosition={mousePosition}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsList;
