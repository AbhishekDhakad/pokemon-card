import Card from "./components/Card.jsx";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((elem) => 
          fetch(elem.url)
            .then((response) => response.json())
            .then((res) => {
              const abilities = res.abilities.map((ability) => ability.ability.name);
              // console.log(abilities)
              return {
                name: elem.name,
                abilities,
              };
            })
        );
        
        Promise.all(promises).then((result) => {

          setCards(result);
        });
      });
  }, []);
  console.log(cards);

  return (
    <div className="App">
      {cards.map((element) => (
        <Card name={element.name} abilities={element.abilities} />
      ))}
    </div>
  );
}

export default App;
