import SectionHeading from "./common/SectionHeading";
import { skillsData } from "../lib/data";
import { useSectionInView } from "../lib/useSectionInView";
import Skill from "./Skill";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function SkillList() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-6">
        {skillsData.map((skill, index) => (
          <motion.li
            key={skill.skillText}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
          >
            <Skill skillText={skill.skillText} skillUrl={skill.skillUrl} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
