import React from "react";
import "./IntroSection.scss";

export const introContent = [
  {
    title: "About Us",
    text: "A group of passionate innovators turning ideas into reality.",
  },
  {
    title: "Who We Are",
    text: `We're a diverse group of developers, designers, and problem solvers who met
    through hackathons and university projects. Each of us brings unique skills —
    from front-end design to backend architecture and AI research. Together, we
    thrive on collaboration and creative thinking.`,
  },
  {
    title: "Our Motivation",
    text: `We joined this hackathon to challenge ourselves, learn from others, and build
    something meaningful. We believe technology can solve real problems, and we
    want to make a tangible impact in just 48 hours.`,
  },
];

const IntroSection = () => {
  return (
    <div id="us" className="intro">
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