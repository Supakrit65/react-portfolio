import React from "react";
import SectionHeading from "./common/SectionHeading";
import { projectsData } from "../lib/data";
import Project from "./Project";
import { useSectionInView } from "../lib/useSectionInView";

const ProjectList: React.FC = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
