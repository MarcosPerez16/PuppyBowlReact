// imports here
import { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import { useNavigate } from "react-router-dom";
import { deletePlayerOnServer } from "../API";

const Player = ({ playerName, playerId, onDelete }) => {
  const navigate = useNavigate();

  const handleSeeDetails = (playerId) => {
    navigate(`/players/${playerId}`);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <li>
      <h2>Name: {playerName}</h2>

      <button onClick={() => handleSeeDetails(playerId)}>See Details</button>
      <button onClick={handleDelete}>Delete Player</button>
    </li>
  );
};

//All players function which renders information after clicking see details
const AllPlayers = () => {
  // logic here

  const [players, setPlayers] = useState([]);

  //delete player function

  const deletePlayer = async (playerId) => {
    try {
      await deletePlayerOnServer(playerId);

      const updatedPlayers = players.filter((player) => player.id !== playerId);
      setPlayers(updatedPlayers);
    } catch (error) {
      console.error("Error deleting player", error.message);
    }

    //use filter then ternary to filter out specific id "delete"
  };

  useEffect(() => {
    async function getPlayersList() {
      const playersList = await fetchPlayers();
      console.log(playersList);
      setPlayers(playersList);
    }

    getPlayersList();
  }, []);

  //we can find a nice style for each of the below elements at a different time
  //use a table instead of list
  //have icons next to see details and trash that have a magnifiing glass for see details
  // and a trash can for delete player
  return (
    <div>
      <h1>Players List</h1>
      <ul>
        {players.map((player, idx) => (
          <Player
            key={idx}
            playerName={player.name}
            playerId={player.id}
            onDelete={() => deletePlayer(player.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;
