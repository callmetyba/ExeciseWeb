import React from "react";
import Header from "./Header";
import Member from "./Member";
import Contact from "./Contact";

import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Member />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
