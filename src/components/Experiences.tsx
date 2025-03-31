import SectionHeading from "./common/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import { useSectionInView } from "../lib/useSectionInView";

export default function Experiences() {
  const { ref } = useSectionInView("Experience", 0.4);

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40 mx-auto"
    >
      <SectionHeading>My Experiences</SectionHeading>

      <VerticalTimeline lineColor="#81A1C1">
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#3B4252", // dark nord-1
              boxShadow: "none",
              border: "1px solid rgba(129, 161, 193, 0.5)", // nord-9/50
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #81A1C1", // nord-9
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background: "#2E3440", // dark nord-0
              fontSize: "1.5rem",
              color: "#88C0D0", // nord-8
            }}
          >
            <h3 className="font-semibold capitalize bg-gradient-to-r from-nord-10 to-nord-15 bg-clip-text text-transparent text-xl">
              {experience.title}
            </h3>
            <p className="font-normal !mt-0 text-nord-4">{experience.location}</p>
            <ul
              className="!font-normal text-nord-5 list-none pl-0 space-y-2 !mt-2"
              style={{ lineHeight: "1.6" }}
            >
              {experience.description.map((desc, descIndex) => (
                <li
                  key={descIndex}
                  className="relative pl-8 group transition-all duration-300 hover:translate-x-2"
                >
                  <div className="absolute left-0 top-1 w-5 h-5 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-nord-7 to-nord-8 rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300 shadow-glow" />
                    <div className="absolute w-full h-full border-2 border-nord-7/30 rounded-full scale-0 group-hover:scale-100 transition-all duration-500" />
                  </div>
                  <div className="text-nord-4 group-hover:text-nord-6 transition-colors duration-300">
                    {desc}
                  </div>
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
