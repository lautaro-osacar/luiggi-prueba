import "./App.css";
import React, { useState } from "react";
import Header from "./Header/Header";
import ArtistsList from "./ArtistsList/ArtistsList";

function App() {
  const [selectedArtist, setSelectedArtist] = useState();

  return (
    <div className={`App`}>
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
    </div>
  );
}

export default App;
