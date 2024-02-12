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
    <div className="single-player">
      <div>
        <p>
          <span style={{ color: "blue" }}>ID:</span> {id}
        </p>
        <p>
          <span style={{ color: "blue" }}>Name:</span> {player.name}
        </p>
        <p>
          <span style={{ color: "blue" }}>Breed:</span> {player.breed}
        </p>
        <p>
          <span style={{ color: "blue" }}>Status:</span> {player.status}
        </p>
        <p>
          <img src={player.imageUrl} alt={player.name} />
        </p>
      </div>
    </div>
  );
};

export default SinglePlayer;
