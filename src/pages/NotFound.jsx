import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h2>404 - Page non trouvée</h2>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </main>
  );
}

export default NotFound;
