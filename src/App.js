import "./App.css";
import React, { useState } from "react";
import Item from "./Item";

const backgrounds = {
  perro:
    "https://muttville.org/assets/muttpix/home/banana@1.5x-aaabd98e9feaca7a8049caa14d8ff715808d2f1203bf7924f9f5ba6fa5b254d8.jpg",
  pato: "https://www.collinsdictionary.com/images/thumb/duck_170690246_250.jpg?version=4.0.161",
};

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState();

  return (
    <div className={`App`}>
      <React.Fragment>
        {!!selectedAnimal && (
          <div
            id="background"
            style={{ backgroundImage: `url(${backgrounds[selectedAnimal]})` }}
          />
        )}
        <div className="list-container">
          <div className="column">
            <Item
              onHover={() => setSelectedAnimal("perro")}
              onHoverEnd={() => setSelectedAnimal(null)}
              animalName="perro"
              img={backgrounds.perro}
            />
            <Item
              onHover={() => setSelectedAnimal("pato")}
              onHoverEnd={() => setSelectedAnimal(null)}
              animalName="pato"
              img={backgrounds.pato}
            />
            <Item
              onHover={() => setSelectedAnimal("perro")}
              onHoverEnd={() => setSelectedAnimal(null)}
              animalName="perro"
              img={backgrounds.perro}
            />
          </div>
          <div className="column">
            <Item
              onHover={() => setSelectedAnimal("perro")}
              onHoverEnd={() => setSelectedAnimal(null)}
              animalName="perro"
              img={backgrounds.perro}
            />
            <Item
              onHover={() => setSelectedAnimal("pato")}
              onHoverEnd={() => setSelectedAnimal(null)}
              animalName="pato"
              img={backgrounds.pato}
            />
            <Item
              onHover={() => setSelectedAnimal("perro")}
              onHoverEnd={() => setSelectedAnimal(null)}
              animalName="perro"
              img={backgrounds.perro}
            />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
