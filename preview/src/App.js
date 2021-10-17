import React from "react";

import Astrophel from "astrophel";
import "astrophel/dist/index.css";

const { Sky, Scene } = Astrophel;

const content = <Sky image="Assets/Images/space.jpeg" />;

const App = () => {
  return <Scene content={content} />;
};

export default App;
