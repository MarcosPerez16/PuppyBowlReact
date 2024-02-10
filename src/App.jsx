import "./App.css";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  AllPlayers,
  NavBar,
  NewPlayerForm,
  SinglePlayer,
  PlayerSearch,
} from "./components";

// this route below
/* <Route path="/players/:id" element={<SinglePlayer />} /> */
//allows the user to see a single players details after clicking see details
//i only have a route for this no need for a link on the navbar

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allplayers" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/playersearch" element={<PlayerSearch />} />
        <Route path="/newplayerform" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}

export default App;
