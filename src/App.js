import React from "react";
import "./App.css";
import Header from "./component/header";
import AdSection from "./component/AdSection";

function App() {
  const appStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#fff",
  };
  return (
    <div style={appStyle}>
      <AdSection />
    </div>
  );
}

export default App;
