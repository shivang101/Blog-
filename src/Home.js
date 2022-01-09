import { useState } from "react";

const Home = () => {
  //   let name = "Shivang";
  const [name, setName] = useState("Shivang");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("Shivang Mathur");
    setAge(30);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Home;
