// imports here
import { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import { useNavigate } from "react-router-dom";

const AllPlayers = () => {
  // logic here

  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayersList() {
      const playersList = await fetchPlayers();
      console.log(playersList);
      setPlayers(playersList);
    }

    getPlayersList();
  }, []);

  const handleSeeDetails = (playerId) => {
    navigate(`/players/${playerId}`);
  };

  //we can find a nice style for each of the below elements at a different time
  return (
    <div>
      <h1>Players List</h1>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            <h2>Name: {player.name}</h2>

            <button onClick={() => handleSeeDetails(player.id)}>
              See Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;
