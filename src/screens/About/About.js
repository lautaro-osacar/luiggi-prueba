/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./styles.css";
import contentJson from "./content.json";
import FacebookIcon from "../../icons/Facebook";
import InstagramIcon from "../../icons/Instagram";
import SoundcloudIcon from "../../icons/Soundcloud";

const About = () => {
  const [mobileLogoYOffset, setMobileLogoYOffset] = useState(0);

  useEffect(() => {
    window.onscroll = function (e) {
      var vertical_position = 0;
      if (pageYOffset)
        //usual
        vertical_position = pageYOffset;
      else if (document.documentElement.clientHeight)
        //ie
        vertical_position = document.documentElement.scrollTop;
      else if (document.body)
        //ie quirks
        vertical_position = document.body.scrollTop;
      setMobileLogoYOffset(vertical_position);
    };
  }, []);

  const calcLogoPosition = () => {
    var newPosition = 80 - mobileLogoYOffset;
    if (newPosition <= 10) {
      return `10px`;
    } else {
      return `${newPosition}px`;
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="about-hz">
        <div className="about-left">
          <span id="about-description">
            {contentJson.description.split("\n").map((str, index) => (
              <p key={index}>{str}</p>
            ))}
          </span>
        </div>
        <div className="about-right">
          <img
            id="about-logo"
            src="./crop2.gif"
            alt="logo"
            style={{ top: calcLogoPosition() }}
          />
        </div>
      </div>
      <div className="about-hz" id="bottom-about">
        <div className="about-left">
          <div id="about-phrase">{contentJson.phrase}</div>
          <div id="about-contact">
            <div id="about-social-media">
              <a href={contentJson.facebook} target="_blank" rel="noreferrer">
                <FacebookIcon className="social-logo" />
              </a>
              <a href={contentJson.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon className="social-logo" />
              </a>
              <a href={contentJson.soundcloud} target="_blank" rel="noreferrer">
                <SoundcloudIcon className="social-logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div id="about-address">
            <p>Reinhardtstr. 18</p>
            <p>10178 Berlin</p>
            <p>Germany</p>
            <p>E-Mail: info@clO-Olc.com</p>
            <p>Tel: +49 0 1520 7909153</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
