// imports here
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchPlayerDetails } from "../API";

const SinglePlayer = () => {
  // logic here
  const { id } = useParams();
  const [playerDetails, setPlayerDetails] = useState(null);

  useEffect(() => {
    async function getPlayerDetails() {
      try {
        const details = await fetchPlayerDetails(id);
        setPlayerDetails(details);
      } catch (error) {
        console.error("error fetching player details", error);
      }
    }

    if (id) {
      getPlayerDetails();
    }
  }, [id]);

  if (!playerDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Player Details</h2>
      <p>Name: {playerDetails.name}</p>
      <p>ID: {playerDetails.id}</p>
      <p>Breed: {playerDetails.breed}</p>
      <p>Status: {playerDetails.status}</p>
      <p></p>
      <p>
        Picture: <img src={playerDetails.imageUrl} alt={playerDetails.name} />
      </p>
    </div>
  );
};

export default SinglePlayer;
