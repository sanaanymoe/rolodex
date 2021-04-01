import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { stat } from "node:fs";
import { CardList } from "./components/CardList/CardList";

const App = () => {
  const [monsters, setMonsters] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  });

  // console.log('mon', monsters)

  return (
    <div className="App">
      <CardList name='none'>
        {monsters.map((monster) => (
          <h1>{monster?.name}</h1>
        ))}
      </CardList>
    </div>
  );
};

export default App;
