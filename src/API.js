const cohortName = "2308-ACC-PT-WEB-PT-B";

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export async function fetchPlayers(searchTerm) {
  const response = await fetch(`${APIURL}/players`);
  const data = await response.json();

  //if statement where if searchTerm is provided, it will filter the players based on name
  //which gives functionality to my search bar in player search component
  //if searchTerm is not given it will just return the list of players
  if (searchTerm) {
    return data.data.players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    return data.data.players;
  }

  //in the return statement we access data from json object first, then the data.players
  //refers to accessing the players property within the data object in the API
}

export async function fetchPlayerDetails(playerId) {
  const response = await fetch(`${APIURL}/players/${playerId}`);
  const data = await response.json();
  console.log(data);
  return data.data.player;
}

//Add new player function

export async function addPlayer(playerData) {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(playerData),
    });

    if (!response.ok) {
      throw new Error(`Failed to add player data. Status: ${response.data}`);
    }

    const data = await response.json();
    console.log(data);

    return data.data.player;
  } catch (error) {
    console.error("Error adding player:", error.message);
  }
}

//delete player

export async function deletePlayerOnServer(playerId) {
  const response = await fetch(`${APIURL}/players/${playerId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete player");
  }
}
