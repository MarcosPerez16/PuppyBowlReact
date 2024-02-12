// imports here
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPlayer, fetchPlayers } from "../API";

const NewPlayerForm = () => {
  // logic here

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //form validation

    if (
      !formData.name ||
      !formData.breed ||
      !formData.status ||
      !formData.imageUrl
    ) {
      alert("Fill out all details");
      return;
    }

    try {
      //Calling API function to add new player
      await addPlayer(formData);

      //Logging updated list of players
      const updatedPlayers = await fetchPlayers();
      console.log("Updated Players List:", updatedPlayers);

      navigate("/allplayers");
    } catch (error) {
      console.error("Error adding player", error.message);
    }
  };

  return (
    <div className="new-player-form">
      <h1>New Player Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button style={{ backgroundColor: "white" }} type="submit">
          Add Player
        </button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
