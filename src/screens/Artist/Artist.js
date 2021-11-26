import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import "./styles.css";
import artistsJson from "../../artists.json";
import FacebookIcon from "../../icons/Facebook";
import InstagramIcon from "../../icons/Instagram";
import SoundcloudIcon from "../../icons/Soundcloud";
import DiscogsIcon from "../../icons/Discogs";
import YoutubeIcon from "../../icons/Youtube";
import ScrollIndicator from "../../components/ScrollIndicator/ScrollIndicator";

const Artist = () => {
  const { id } = useParams();
  const artist = artistsJson[id];
  const appRef = useRef(null);

  return (
    <div ref={appRef}>
      <ScrollIndicator appRef={appRef} />
      <Header />
      <div id="artist-title">
        <span>{artist.name}</span>
        <span id="artist-pronoun">{artist.pronoun}</span>
      </div>
      <div id="artist-hz">
        <div id="artist-left">
          <span id="artist-description">
            {artist.description.replace("\n", `\n`)}
          </span>
          <div id="artist-contact">
            Booking: ampi@clO-Olc.com
            <div id="artist-social-media">
              {!!artist.facebook && (
                <a href={artist.facebook} target="_blank" rel="noreferrer">
                  <FacebookIcon className="artist-social-logo" />
                </a>
              )}
              {!!artist.instagram && (
                <a href={artist.instagram} target="_blank" rel="noreferrer">
                  <InstagramIcon className="artist-social-logo" />
                </a>
              )}
              {!!artist.soundcloud && (
                <a href={artist.soundcloud} target="_blank" rel="noreferrer">
                  <SoundcloudIcon className="artist-social-logo" />
                </a>
              )}
              {!!artist.youtube && (
                <a href={artist.youtube} target="_blank" rel="noreferrer">
                  <YoutubeIcon className="artist-social-logo" />
                </a>
              )}
              {!!artist.discogs && (
                <a href={artist.discogs} target="_blank" rel="noreferrer">
                  <DiscogsIcon className="artist-social-logo" />
                </a>
              )}
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
