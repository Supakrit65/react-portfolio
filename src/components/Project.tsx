import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  sourceURL: string;
  appURL?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  imageUrl,
  sourceURL,
  appURL,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="max-w-[46rem] border border-nord-2/50 rounded-xl overflow-hidden relative transition bg-nord-1 hover:bg-nord-1/80 text-nord-5">
        <div className="flex flex-col sm:flex-row h-full min-h-[22rem] sm:min-h-0">
          {/* Text Content */}
          <div className="pt-4 pb-4 px-5 sm:pl-8 sm:pr-4 sm:py-6 flex-1 flex flex-col sm:w-[55%]">
            <div className="flex flex-row items-center gap-x-2 mb-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-nord-10 to-nord-15 bg-clip-text text-transparent">
                {title}
              </h3>
              <div className="flex items-center gap-x-2 ml-2">
                <a
                  href={sourceURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nord-8 hover:text-nord-9 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-nord-8"
                  aria-label={`View ${title} source code on GitHub`}
                >
                  <FaGithub size={20} />
                </a>
                {appURL && (
                  <a
                    href={appURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nord-8 hover:text-nord-9 transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-nord-8"
                    aria-label={`Visit ${title} live website`}
                  >
                    <FaGlobe size={20} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-nord-5 mb-3 sm:mb-4">
              {description}
            </p>
            <ul className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="px-2.5 py-1 text-xs sm:text-sm rounded-full bg-nord-2 text-nord-5 hover:bg-nord-9/30 transition-colors"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative sm:w-[45%] h-64 sm:h-auto group-even:sm:order-first">
            <div className="absolute inset-0 overflow-hidden rounded-r-xl sm:group-even:rounded-l-xl sm:group-even:rounded-r-none">
              <img
                src={imageUrl}
                alt={`Screenshot of ${title} project`}
                loading="lazy"
                className="w-full h-full object-cover object-left-top sm:object-center
                  transition-transform duration-300
                  group-hover:scale-105
                  group-hover:-translate-x-1
                  group-hover:translate-y-1
                  group-hover:-rotate-1
                  group-even:group-hover:translate-x-1
                  group-even:group-hover:translate-y-1
                  group-even:group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nord-1/60 to-transparent sm:bg-gradient-to-r sm:from-nord-1/40 sm:group-even:bg-gradient-to-l" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
