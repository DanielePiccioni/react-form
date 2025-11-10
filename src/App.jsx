import React, { useState } from "react";
import Articoli from "./assets/components/Articoli";

function App() {
  const [articles, setArticles] = useState(Articoli);
  const [newTitle, setNewTitle] = useState("");
  return (
    <>
      <div>
        <h1>Lista Articoli</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>

        <hr />

        <h2>Aggiungi un nuovo articolo</h2>
        <input
          type="text"
          placeholder="Titolo articolo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button>Aggiungi</button>
      </div>
    </>
  );
}

export default App;
