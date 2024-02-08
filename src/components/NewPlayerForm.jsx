// imports here
import { useState, useEffect } from "react";
import axios from "axios";
import SinglePlayer from "./SinglePlayer";

const cohortName = "2308-ACC-PT-WEB-PT-B";

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const App = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({ name: "", age: "" });

  useEffect(() => {
    // Fetch existing players from the API when the component mounts
    console.log("Players:", players);

    fetchPlayers();
    console.log("Players:", players);
  }, []); // Empty dependency array to ensure the effect runs only once

  const fetchPlayers = async () => {
    try {
      const response = await axios.get(`${APIURL}/players`); // Replace with your API endpoint
      console.log(response);
      setPlayers(response.data.data.players);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post the new player to the API
      await axios.post(`${APIURL}/players`, newPlayer); // Replace with your API endpoint

      // Update the state with the new player
      setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
      // Clear the form fields
      setNewPlayer({ name: "", breed: "", status: "field", imageUrl: "" });
    } catch (error) {
      console.error("Error adding player:", error);
    }
    console.log("Players:", players);
  };

  return (
    <div>
      {" "}
      <h1>Player List</h1>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <label>
          {" "}
          Name:{" "}
          <input
            type="text"
            name="name"
            value={newPlayer.name}
            onChange={handleChange}
          />{" "}
        </label>{" "}
        <br />{" "}
        <label>
          {" "}
          breed:{" "}
          <input
            type="text"
            name="breed"
            value={newPlayer.breed}
            onChange={handleChange}
          />{" "}
        </label>{" "}
        <label>
          {" "}
          Status:{" "}
          <input
            type="text"
            name="Status"
            value={newPlayer.status}
            onChange={handleChange}
          />{" "}
        </label>{" "}
        <label>
          {" "}
          imageUrl:{" "}
          <input
            type="text"
            name="imageUrl"
            value={newPlayer.imageUrl}
            onChange={handleChange}
          />{" "}
        </label>{" "}
        <br /> <button type="submit">Add Player</button>{" "}
      </form>{" "}
      <h2>Existing Players</h2>{" "}
      {players &&
        players.map((player, index) => (
          <SinglePlayer key={index} player={player} />
        ))}{" "}
    </div>
  );
};
export default App;
