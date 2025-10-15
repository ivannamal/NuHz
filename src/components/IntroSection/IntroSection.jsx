import React from "react";
import "./IntroSection.scss";
import { introContent } from "../../content/IntroContent.js";

const IntroSection = () => {
  return (
    <div className="intro">
      {introContent.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
        </section>
      ))}
    </div>
  );
};

export default IntroSection;
