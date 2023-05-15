import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import AddBeer from "./components/AddBeer";

function App() {
  const [beers, setBeer] = useState([]);

  const addBeer = (beer) => {
    const id = Math.ceil(Math.random() * 100000);
    const newBeer = { id, ...beer };
    setBeer([...beers, newBeer]);
  };

  return (
    <div className="container">
      <Header title="Beer List" />
      <AddBeer onAdd={addBeer} />
      <List beers={beers} />
    </div>
  );
}

export default App;
