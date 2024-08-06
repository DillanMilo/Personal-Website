import React from "react";
import "./Home.css"; // Ensure you create the corresponding CSS file

const Home: React.FC = () => {
  return (
    <div id="home">
      <header>
        <h1>Welcome to My Personal Website</h1>
      </header>
      <section className="intro">
        <p>Hi, I'm Dillan Milosevich, a passionate software engineer...</p>
      </section>
    </div>
  );
};

export default Home;
