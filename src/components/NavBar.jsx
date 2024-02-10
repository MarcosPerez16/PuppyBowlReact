// imports here

import { Link } from "react-router-dom";

const NavBar = () => {
  // logic here
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/allplayers"}>All Players</Link>
      <Link to={"/playersearch"}>Player Search</Link>
      <Link to={"/newplayerform"}>New Player Form</Link>
    </nav>
  );
};

export default NavBar;
