import React from "react";

import AuthUseContext from "../hooks/AuthUseContext";

const About = () => {
  const { email } = AuthUseContext();

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>HOŞ GELDİNİZ.</h2>
    </div>
  );
};

export default About;
