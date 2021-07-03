import React from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import "./styles.css";
import artistsJson from "../../artists.json";

const Artist = () => {
  const { name } = useParams();
  const artist = artistsJson[name];
  console.log(artist)
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
};

export default Artist;
