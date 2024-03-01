import React from "react";
import "./App.css";
import Header from "./components/Header";
import UserRegistration from "./pages/UserRegistration";;

function App() {
  return (
    <div className="App">
      <Header />
      <UserRegistration />
    </div>
  );
}

export default App;