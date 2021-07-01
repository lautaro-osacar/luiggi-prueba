import React from "react";
import Header from "../../components/Header/Header";
import "./styles.css";
import contentJson from "./content.json";

const About = () => {
  console.log(contentJson);
  return (
    <React.Fragment>
      <Header />
      <div id="about-hz">
        <div id="about-left">
          <span id="about-description">
            {contentJson.description.split("\n").map((str) => (
              <p>{str}</p>
            ))}
          </span>
        </div>
        <div id="about-right">
          <img
            id="about-logo"
            src="./logo-cropped.png"
            alt="logo"
            //style={{ height: "200px" }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
