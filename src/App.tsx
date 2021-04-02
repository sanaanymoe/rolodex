import React, { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";

const App = () => {
  const [monsters, setMonsters] = useState<any[]>([]);
  const[searchTerm, setSearchTerm] = useState<any>("");

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        setMonsters(
          users.filter((user: any) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      );
  });

  return (
    <div className="App">
      <input type='search' placeholder='Search' value={ searchTerm } onChange={handleSearch} />
      {monsters.length > 1 ? 
       <CardList monsters={ monsters } />
       :
       <h1>Sorry No Monsters Matching</h1> 
}
    </div>
  );
};

export default App;
