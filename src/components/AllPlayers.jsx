// imports here
import { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import { useNavigate } from "react-router-dom";

const Player = ({ playerName, playerId }) => {
  const navigate = useNavigate();

  const handleSeeDetails = (playerId) => {
    navigate(`/players/${playerId}`);
  };

  return (
    <li>
      <h2>Name: {playerName}</h2>

      <button onClick={() => handleSeeDetails(playerId)}>See Details</button>
    </li>
  );
};

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

  //we can find a nice style for each of the below elements at a different time
  return (
    <div>
      <h1>Players List</h1>
      <ul>
        {players.map((player, idx) => (
          <Player key={idx} playerName={player.name} playerId={player.id} />
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;
