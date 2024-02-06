import "./App.css";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  AllPlayers,
  NavBar,
  NewPlayerForm,
  SinglePlayer,
} from "./components";

//On the puppy bowls step by step instructions I left off on 4. Fetch players, everything before that has been done

//Keep in mind that the <Route> for Single Player is probably going to change
//depending on how we fetch the data so the path "/players/id:" can change
//for now i will leave it as is and if im getting erros that might be the case and it needs
//to be fixed to the correct path and then we can link it in our navbar component

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
