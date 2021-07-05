import React from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import "./styles.css";
import artistsJson from "../../artists.json";
import FacebookIcon from "../../icons/Facebook";
import InstagramIcon from "../../icons/Instagram";
import SoundcloudIcon from "../../icons/Soundcloud";

const Artist = () => {
  const { id } = useParams();
  const artist = artistsJson[id];
  console.log(artist);
  return (
    <React.Fragment>
      <Header />
      <span id="artist-title">{artist.name}</span>
      <div id="artist-hz">
        <div id="artist-left">
          <img
            alt={artist.name}
            src={process.env.PUBLIC_URL + artist.photo}
            id="artist-image"
          />
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
          <span id="artist-description">
            {artist.description.split("\n").map((str, index) => (
              <p key={index}>{str}</p>
            ))}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Artist;
