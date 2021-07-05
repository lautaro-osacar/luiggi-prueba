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
            {contentJson.description.split("\n").map((str, index) => (
              <p key={index}>{str}</p>
            ))}
          </span>
        </div>
        <div className="about-right">
          <img id="about-logo" src="./crop2.gif" alt="logo" />
        </div>
      </div>
      <div className="about-hz" id="bottom-about">
        <div className="about-left">
          <div id="about-phrase">{contentJson.phrase}</div>
          <div id="about-contact">
            <div id="about-social-media">
              <FacebookIcon className="social-logo" />
              <InstagramIcon className="social-logo" />
              <SoundcloudIcon className="social-logo" />
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
