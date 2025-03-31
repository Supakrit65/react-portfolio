import React, { useRef } from "react";
import SectionHeading from "./common/SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "../lib/useSectionInView";
import { certifications } from "../lib/data";

const Education: React.FC = () => {
  const { ref } = useSectionInView("Education", 0.5);
  const animationRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-28 max-w-[45rem] mx-auto scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Education</SectionHeading>

      <motion.div
        ref={animationRef}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="mt-10"
      >
        <div className="relative group">
          <div className="relative bg-nord-1 rounded-xl p-6 transition-all duration-300 border border-nord-2/50 border-2">
            {/* University Info */}
            <div className="pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-nord-10 to-nord-15 bg-clip-text text-transparent">
                    Kasetsart University
                  </h3>
                  <p className="text-sm text-nord-4 mt-1">
                    Bangkok, Thailand | 08/2022 – 05/2026
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-nord-8/30 text-nord-8">
                    GPA: 3.8
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <p className="text-nord-5">
                  Bachelor of Engineering in Software and Knowledge
                </p>
                <div>
                  <p className="text-sm font-medium text-nord-4">
                    Relevant Coursework:
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "OOP",
                      "Design Patterns",
                      "Software Architecture",
                      "Web Development",
                      "Cloud Computing",
                      "Machine Learning",
                      "Data Analysis",
                      "Agile",
                      "Project Management",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-sm rounded-full text-nord-5 bg-nord-15/50 hover:bg-nord-9/30 transition-colors duration-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="pt-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-nord-14 to-nord-10 bg-clip-text text-transparent">
                Certifications
              </h3>
              <div className="mt-4 space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`${cert.bgClass} rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-nord-5">
                        {cert.title}
                      </span>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-nord-8 hover:text-nord-9 transition-colors"
                      >
                        View Certificate
                      </a>
                    </div>
                    <p className="text-sm text-nord-4 mt-1">
                      {cert.issuer} | {cert.date}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm rounded-full text-nord-5 bg-nord-14/50 hover:bg-nord-9/30 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Education;
