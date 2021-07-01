import React from "react";
import Header from "../../components/Header/Header";
import "./styles.css";
import contentJson from "./content.json";
import FacebookIcon from "../../icons/Facebook";
import InstagramIcon from "../../icons/Instagram";
import SoundcloudIcon from "../../icons/Soundcloud";

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="about-hz">
        <div className="about-left">
          <span id="about-description">
            {contentJson.description.split("\n").map((str) => (
              <p>{str}</p>
            ))}
          </span>
        </div>
        <div className="about-right">
          <img id="about-logo" src="./logo.gif" alt="logo" />
        </div>
      </div>
      <div className="about-hz">
        <div className="about-left">
          <div id="about-contact">
            <div id="about-social-media">
              <FacebookIcon className="social-logo" />
              <InstagramIcon className="social-logo" />
              <SoundcloudIcon className="social-logo" />
            </div>
            <div id="about-contact-mail">
              General inquires: info@clO-Olc.com
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
