// imports here
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerSearch from "./PlayerSearch";
import { fetchPlayerDetails, fetchPlayers } from "../API";

const SinglePlayer = () => {
  // logic here

  const [player, setPlayer] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  let { id } = useParams();

  //handle search function
  const handleSearch = async (searchTerm) => {
    const playersList = await fetchPlayers(searchTerm);
    setSearchResults(playersList);
  };

  useEffect(() => {
    async function getPlayerDetails() {
      const myPlayer = await fetchPlayerDetails(id);
      setPlayer(myPlayer);
    }

    getPlayerDetails();
  }, [id]);

  return (
    <div>
      <h2>SinglePlayerPage</h2>

      <div>
        <h2>Player Details</h2>
        <p>ID: {id}</p>
        <p>Name: {player.name}</p>
        <p>Breed: {player.breed}</p>
        <p>Status: {player.status}</p>
        <p>
          Picture: <img src={player.imageUrl} alt={player.name} />
        </p>
      </div>
      <PlayerSearch onSearch={handleSearch} />

      <h3>Search Results:</h3>
      <ul>
        {searchResults.map((result, idx) => {
          <li key={idx}>
            <p>Name: {result.name}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default SinglePlayer;
