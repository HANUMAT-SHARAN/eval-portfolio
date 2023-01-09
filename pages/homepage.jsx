import React from "react";
import Profile from "../Components/Profile";
import Projects from "../Components/Projects";

const HomePage = () => {
  return (
    <div id="home" >
      <div>
        <Profile />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default HomePage;
