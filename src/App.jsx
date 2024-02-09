import "./App.css";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  AllPlayers,
  NavBar,
  NewPlayerForm,
  SinglePlayer,
} from "./components";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allplayers" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/newplayerform" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}

export default App;
