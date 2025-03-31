import React from "react";
import { Tooltip } from "react-tooltip";

interface SkillProps {
  skillText: string;
  skillUrl: string;
}

const Skill: React.FC<SkillProps> = ({ skillText, skillUrl }) => {
  // Generate a unique ID for each skill instance
  const uniqueId = `skill-${skillText.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <>
      <div
        className="group hover:scale-110 transition duration-300 ease-in-out rounded-full shadow-sm ring-1 ring-nord-2/50 hover:shadow-md"
        data-tooltip-id={uniqueId} // Unique ID for the tooltip
        data-tooltip-content={skillText} // Content for the tooltip
      >
        <div className="flex justify-center items-center w-[4rem] h-[4rem] sm:w-[6rem] sm:h-[6rem] bg-nord-1 rounded-full">
          <img
            src={skillUrl}
            alt={skillText}
            loading="lazy"
            className="w-[2.4rem] h-[2.4rem] sm:w-[50px] sm:h-[50px]"
          />
        </div>
      </div>
      <Tooltip
        id={uniqueId}
        place="bottom"
        delayShow={300}
        className="custom-tooltip"
      />
    </>
  );
};

export default Skill;