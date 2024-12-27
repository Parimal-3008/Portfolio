import React, { useState } from "react";
import "../components/css/Work.css";
const Work = React.forwardRef((props, ref) => {
  const workExperience = [
    {
      company: "Bild",
      duration: "September 2023 - Present",
      role: "Software Development Engineer ",
      referenceLink: "https://www.getbild.com/",
      description: [
        "Implemented hotkeys to improve efficiency by 60%, resulting in a significant boost in user productivity",
        "Migrated multiple global states from Redux to Zustand for improved state management",
        "Redesigned approval flow based on client requirements, streamlining the process and reducing lead time",
        "Designed and added new APIs for new features as per the product requirement",
        "Developed a unified search UI with pagination and keyboard navigation for improved user interaction and performance",
        "Contributed to the migration of existing APIs to the Hono framework, enhancing API design and structure",
        "Established a common codebase ground for both web and desktop applications, enabling future feature development by other developers and ensuring consistency across existing features",
      ],
    },
    {
      company: "GE Healthcare",
      duration: "May 2022 - July 2022",
      role: "Software Development Engineering Intern ",
      referenceLink:
        "https://drive.google.com/file/d/1NLuCkYZO-MT6bLLTEoyUhyb6XuVh7Hy0/view",
      description: [
        "Explored GE software of Imaging Fabric to learn about existing API and methods for project purpose",
        "Created HTML web page to display patient’s Dicom(Digital Imaging and Communications in Medicine) images and corresponding details for further data analysis and visualization",
        "Processed data from Dicom tags to visualize and load the data on HTML page",
        "Implemented image panning, zooming and rotating feature for the Web-page to enhance the visuals of the images",
      ],
    },
  ];

  return (
    <div className="workparent" ref={ref}>
      <div className="workname2">
        <hr className="workhr" id="leftline" />
        Experience
        <hr className="workhr" id="rightline" />
      </div>
      <div className="workouterdiv">
        <div className="parentCompanyName">
          {workExperience.map((job) => {
            return (
              <>
                <div
                  className="workcompanyname"
                  style={{
                    borderBottom: "3px solid #ffc857",
                    color: "#ffc857",
                  }}
                >
                  {job.company}
                </div>
                <div className="workright">
                  <div className="workrole">{job.role}</div>
                  <div className="workduration">{job.duration}</div>
                  <div className="workdescription">
                    <ul style={{ width: "100%" }}>
                      {job.description.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Work;
