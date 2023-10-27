import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Software Developer",
          "Computer Science Tutor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
