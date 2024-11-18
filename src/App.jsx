import React from "react";
import "./App.css";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import MarsRoverList from "./components/MarsRover/MarsRoverList";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <MarsRoverList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
