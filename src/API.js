const cohortName = "2308-ACC-PT-WEB-PT-B";

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export async function fetchPlayers() {
  const response = await fetch(`${APIURL}/players`);
  const data = await response.json();
  console.log(data);
  return data.data.players;

  //in the return statement we access data from json object first, then the data.players
  //refers to accessing the players property within the data object in the API
}
