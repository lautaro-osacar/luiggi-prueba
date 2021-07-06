import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ArtistsList from "../../components/ArtistsList/ArtistsList";

const Home = () => {
  const [selectedArtist, setSelectedArtist] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const listener = (evt) => setIsMobile(!evt.matches);
    try {
      const watcher = window.matchMedia("(min-width: 768px)");
      listener(watcher);
      watcher.addEventListener("change", listener);
      return () => {
        window
          .matchMedia("(min-width: 768px)")
          .removeEventListener("change", listener);
      };
    } catch (err) {
      //deprecated but working on safari
      const watcher = window.matchMedia("(min-width: 768px)");
      listener(watcher);
      watcher.addListener(listener);
      return () => {
        window.matchMedia("(min-width: 768px)").removeListener(listener);
      };
    }
  }, []);

  return (
    <div className={selectedArtist && "with-background"}>
      {!isMobile && !!selectedArtist && (
        <div
          id="background"
          style={{ backgroundImage: `url(${selectedArtist})` }}
        />
      )}
      <Header />
      <ArtistsList
        onHoverArtist={(artist) => setSelectedArtist(artist.photo)}
        onHoverArtistEnd={() => setSelectedArtist(null)}
        isMobile={isMobile}
      />
      {!isMobile && !selectedArtist && (
        <div>
          <div id="background-bottom" />
          <img id="background-bottom-logo" src="./crop2.gif" alt="logo" />
          <span id="background-bottom-year">@2021</span>
        </div>
      )}
      {isMobile && <img id="mobile-bottom-logo" src="./crop2.gif" alt="logo" />}
    </div>
  );
};

export default Home;
