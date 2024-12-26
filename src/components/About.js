import React from "react";
import "../components/css/About.css";

const About = React.forwardRef((props, ref) => {
  return (
    <div className="parent2" ref={ref}>
      <div className="name2">
        <hr className="projecthr" />
        About Me
        <hr className="projecthr" />
      </div>
      <div className="MyDesc">
        <p>
          Hello! I am Parimal. I have completed my graduation from NIT Surat in
          2023.
        </p>
        <p>
          I am a Software Development Engineer at Bild, where I have been
          working on improving existing UIs and developing new ones for both web
          and desktop applications. I have also contributed to replacing the
          previous system for managing app data with a simpler and more
          efficient one. Additionally, I have designed APIs for new features and
          worked on backend systems to ensure seamless integration with the
          frontend.
        </p>
        <p>
          During my undergrad, I interned at GE Healthcare, where I gained
          valuable experience. Additionally, through personal projects, I worked
          with React.js, Node.js, Express.js, MongoDB, and PostgreSQL. I also
          improved my problem-solving skills by solving over 1,500 problems on
          LeetCode and Codeforces.
        </p>
        <p>
          Currently, I am learning how to design scalable systems, working on
          side projects, and continuously improving my problem-solving skills to
          further enhance my abilities in software development.
        </p>
      </div>
    </div>
  );
});

export default About;
