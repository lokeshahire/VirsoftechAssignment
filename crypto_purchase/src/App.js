import React from "react";
import "./App.css";
import Crypto from "./components/Crypto";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Purchase App</h1>
      </header>
      <main className="App-main">
        <Crypto />
      </main>
    </div>
  );
}

export default App;
