// imports here
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPlayerDetails } from "../API";

const SinglePlayer = () => {
  // logic here

  const [player, setPlayer] = useState({});
  let { id } = useParams();

  useEffect(() => {
    async function getPlayerDetails() {
      const myPlayer = await fetchPlayerDetails(id);
      setPlayer(myPlayer);
    }

    getPlayerDetails();
  }, [id]);

  return (
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
  );
};

export default SinglePlayer;
