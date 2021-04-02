import React, { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";

const App = () => {
  const [monsters, setMonsters] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  });


  return (
    <div className="App">
      <CardList monsters={ monsters } />
    </div>
  );
};

export default App;
