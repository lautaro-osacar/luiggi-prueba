import "./App.css";
import React, { useState } from "react";

const backgrounds = {
  perro:
    "https://muttville.org/assets/muttpix/home/banana@1.5x-aaabd98e9feaca7a8049caa14d8ff715808d2f1203bf7924f9f5ba6fa5b254d8.jpg",
  pato: "https://www.collinsdictionary.com/images/thumb/duck_170690246_250.jpg?version=4.0.161",
};

function App() {
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState("perro");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseOver = (animal, event) => {
    console.log(event)
    setMousePosition({ x: event.clientX, y: event.clientY });
    setIsMouseHover(true);
    setSelectedAnimal(animal);
  };

  console.log(mousePosition)

  return (
    <div className={`App`}>
      <React.Fragment>
        {isMouseHover && (
          <div
            id="background"
            style={{ backgroundImage: `url(${backgrounds[selectedAnimal]})` }}
          />
        )}
        <div className="list-container">
          <div
            className="list-content"
            onMouseEnter={(e) => onMouseOver("perro", e)}
            onMouseLeave={() => setIsMouseHover(false)}
          >
            <span className="list-text">PERRO</span>
            {isMouseHover && selectedAnimal === 'perro' && (
              <img
                alt="perro"
                src={backgrounds.perro}
                id="perro-img"
                className="image"
                style={{ top: mousePosition.y, left: mousePosition.x }}
              />
            )}
          </div>
          <div
            className="list-content"
            onMouseEnter={(e) => onMouseOver("pato", e)}
            onMouseLeave={() => setIsMouseHover(false)}
          >
            PATO
            {isMouseHover && selectedAnimal === 'pato' &&
            <img
                alt="pato"
                src={backgrounds.pato}
                id="pato-img"
                className="image"
                style={{ top: mousePosition.y, left: mousePosition.x }}
              />
            }
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
