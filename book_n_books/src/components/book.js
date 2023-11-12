import React from "react";

export default function Book({ setCurrentPage }) {
  return (
    <div>
      <h2>Página Inicial</h2>
      <button onClick={() => setCurrentPage("HOME")}>Ir para HOME</button>
    </div>
  );
}
