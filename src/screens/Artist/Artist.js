import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import "./styles.css";
import artistsJson from "../../artists.json";
import FacebookIcon from "../../icons/Facebook";
import InstagramIcon from "../../icons/Instagram";
import SoundcloudIcon from "../../icons/Soundcloud";
import ScrollIndicator from "../../components/ScrollIndicator/ScrollIndicator";

const Artist = () => {
  const { id } = useParams();
  const artist = artistsJson[id];
  const appRef = useRef(null);

  return (
    <div ref={appRef}>
      <ScrollIndicator appRef={appRef} />
      <Header />
      <span id="artist-title">{artist.name}</span>
      <div id="artist-hz">
        <div id="artist-left">
          <span id="artist-description">
            {artist.description.split("\n").map((str, index) => (
              <p key={index}>{str}</p>
            ))}
          </span>
          <div id="artist-contact">
            Booking: ampi@clO-Olc.com
            <div id="artist-social-media">
              <FacebookIcon className="artist-social-logo" />
              <InstagramIcon className="artist-social-logo" />
              <SoundcloudIcon className="artist-social-logo" />
            </div>
          </div>
        </div>
        <div id="artist-right">
          <img
            alt={artist.name}
            src={process.env.PUBLIC_URL + artist.photo}
            id="artist-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Artist;
