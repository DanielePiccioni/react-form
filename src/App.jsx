import React from "react";
import Articoli from "./assets/components/Articoli";

function App() {
  return (
    <>
      <div>
        <h1>Lista Articoli</h1>
        <ul>
          {Articoli.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
