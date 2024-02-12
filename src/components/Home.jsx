// imports here
const Home = () => {
  // logic here
  return (
    <div className="home-title">
      <h1 style={{ color: "silver" }}>Welcome to the Puppy Bowl!</h1>
      <br />

      <p style={{ fontWeight: "bold" }}>
        Choose a link from the Navigation bar above to get started!
      </p>

      <img
        src="./src/assets/mastiff.jpg"
        alt="puppy"
        style={{ maxWidth: "50%", height: "auto", padding: "20px" }}
      />
    </div>
  );
};

export default Home;
