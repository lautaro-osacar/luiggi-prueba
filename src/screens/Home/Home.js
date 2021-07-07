import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import ArtistsList from "../../components/ArtistsList/ArtistsList";
import ArrowDown from "../../icons/ArrowDown";

const Home = () => {
  const [selectedArtist, setSelectedArtist] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const [isBottomReached, setBottomReached] = useState(false);
  const appRef = useRef(null);

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

  const isBottom = (el) => {
    return el.current.getBoundingClientRect().bottom - 1 < window.innerHeight;
  };

  useEffect(() => {
    const trackScrolling = () => {
      if (isBottom(appRef)) {
        setBottomReached(true);
      }else{
        setBottomReached(false);
      }
    };
    document.addEventListener("scroll", trackScrolling);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [appRef]);

  return (
    <div className={selectedArtist && "with-background"} ref={appRef}>
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
      {isMobile && (
        <React.Fragment>
          <img id="mobile-bottom-logo" src="./crop2.gif" alt="logo" />
          {!isBottomReached && <ArrowDown id="mobile-arrow-down" onClick={console.log} />}
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
