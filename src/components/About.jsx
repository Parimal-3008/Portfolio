import React from "react";
import { ReactComponent as WorkIcon } from "../components/icons/Work.svg";
import { ReactComponent as SchoolIcon } from "../components/icons/School.svg";
import { ReactComponent as StarIcon } from "../components/icons/Star.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#2c263b", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #2c263b" }}
            date="2023 - present"
            iconStyle={{ background: "#2c263b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Development Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Bild</h4>
            <p>Hyderabad, India</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023"
            iconStyle={{ background: "#2c263b", color: "red !important" }}
            icon={<SchoolIcon />}
          >
            <h5 style={{ color: "#2c263b" }}>
              Bachelor of Technology in Electrical Engineering
            </h5>
            <h6 style={{ color: "#2c263b" }}>
              National Institute of Technology, Surat
            </h6>
            <p style={{ color: "#2c263b" }}>Gujarat, India</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - July 2022"
            iconStyle={{ background: "#2c263b" }}
            icon={<WorkIcon />}
          >
            <h5 style={{ color: "#2c263b" }}>
              Software Development Engineering Intern
            </h5>
            <h6 style={{ color: "#2c263b" }}>GE Healthcare, Bengaluru</h6>
            <p style={{ color: "#2c263b" }}>Karnataka, India</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "#2c263b", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>

        {/* <p>
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
        </p> */}
      </div>
    </div>
  );
});

export default About;
