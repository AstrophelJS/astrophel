import React from "react";
import Astrophel from "astrophel";

const { Sky, Scene, AstrophelRoot, Camera, Image } = Astrophel;

const content = (
  <>
    <Camera />
    <Image image="Assets/Images/astrophel-title.png"/>
    <Sky
      image="Assets/Images/space.jpeg"
      rotating={{ angle: 360, duration: 100000 }}
    />
  </>
);

const App = () => {
  return (
    <AstrophelRoot>
      <Scene content={content} />
    </AstrophelRoot>
  );
};

export default App;
