import React, { useState } from "react";
import Articoli from "./assets/components/Articoli";

function App() {
  const [articles, setArticles] = useState(Articoli);
  return (
    <>
      <div>
        <h1>Lista Articoli</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
