// imports here
import { useState, useEffect } from "react";
import { fetchPlayers } from "../API";

const AllPlayers = () => {
  // logic here

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayersList() {
      const playersList = await fetchPlayers();
      console.log(playersList);
      setPlayers(playersList);
    }

    getPlayersList();
  }, []);

  //we can find a nice style for each of the below attributes at a different time
  return (
    <div>
      <h1>Players List</h1>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            <h2>Name: {player.name}</h2>
            <h3>Breed: {player.breed}</h3>
            <h4>player ID: {player.id}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;
