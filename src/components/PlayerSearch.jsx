// imports here
import { useState } from "react";
import { fetchPlayers } from "../API";

const PlayerSearch = () => {
  // logic here

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const playersList = await fetchPlayers(searchTerm);

    //checks if name is in the list and if not gives error message
    if (playersList.length === 0) {
      setError("Name not found or no names start with that letter");
    } else {
      setError("");
    }

    setSearchResults(playersList);
  };

  return (
    <div>
      <h2>PlayerSearch</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h3>Search Results:</h3>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {searchResults.map((result, idx) => (
            <li key={idx}>
              <p>Name: {result.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlayerSearch;
