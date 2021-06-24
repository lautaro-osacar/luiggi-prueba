import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ArtistsList from "../../components/ArtistsList/ArtistsList";

const Home = () => {
  const [selectedArtist, setSelectedArtist] = useState();

  return (
    <React.Fragment>
      {!!selectedArtist && (
        <div
          id="background"
          style={{ backgroundImage: `url(${selectedArtist})` }}
        />
      )}
      <Header />
      <ArtistsList
        onHoverArtist={(artist) => setSelectedArtist(artist.photo)}
        onHoverArtistEnd={() => setSelectedArtist(null)}
      />
      {!selectedArtist && <div id="background-bottom" />}
    </React.Fragment>
  );
}

export default Home;
