import React from "react";

import Astrophel from "astrophel";
import "astrophel/dist/index.css";

const { Sky, Scene, AstrophelRoot } = Astrophel;

const content = <Sky image="Assets/Images/space.jpeg" />;

const App = () => {
  return (
    <AstrophelRoot>
      <Scene content={content} />
    </AstrophelRoot>
  );
};

export default App;
