import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionHeading from "./common/SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "../lib/useSectionInView";
import { toast } from "react-hot-toast";
import { JSX, useRef } from "react";

interface ContactMethod {
  icon: JSX.Element;
  title: string;
  value: string;
  link?: string;
  action?: "copy";
}

const contactMethods: ContactMethod[] = [
  {
    icon: <FaLinkedin className="w-8 h-8" />,
    title: "LinkedIn",
    value: "Let's connect professionally",
    link: "https://www.linkedin.com/in/supakritaphonmaeklong/",
  },
  {
    icon: <FaGithub className="w-8 h-8" />,
    title: "GitHub",
    value: "Check my repositories",
    link: "https://github.com/Supakrit65",
  },
  {
    icon: <FaEnvelope className="w-8 h-8" />,
    title: "Email",
    value: "supakritaphonmaeklong@gmail.com",
    action: "copy",
  },
];

export default function Contact() {
  const { ref: sectionRef } = useSectionInView("Contact");
  const animationRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["0 1", "1.33 1"],
  });
  const triggerProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("supakritaphonmaeklong@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  const cardVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: index % 2 === 0 ? -90 : 90,
      skewX: index === 1 ? 20 : -20,
      y: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      skewX: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.5,
        duration: 1.5,
      },
    },
  });

  const childVariants = {
    hidden: { opacity: 0, y: 20, rotate: 180 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-24 sm:mb-32 w-[min(100%,48rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <motion.div
        ref={animationRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        style={{ opacity: triggerProgress }}
      >
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            variants={cardVariants(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className={method.action ? "md:col-span-2" : ""}
          >
            {method.action === "copy" ? (
              <motion.button
                onClick={handleEmailCopy}
                variants={childVariants}
                initial="hidden"
                animate="visible"
                className="w-full h-full p-8 flex flex-col items-center justify-center 
                  bg-nord-2 hover:bg-nord-3 border border-nord-3
                  hover:scale-[1.02] transition-all rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-nord-8"
              >
                <motion.div variants={childVariants}>{method.icon}</motion.div>
                <motion.h3
                  variants={childVariants}
                  className="mt-2 text-xl font-semibold text-nord-8"
                >
                  {method.title}
                </motion.h3>
                <motion.p
                  variants={childVariants}
                  className="text-base mt-1 text-nord-4"
                >
                  {method.value}
                </motion.p>
              </motion.button>
            ) : (
              <motion.div
                variants={childVariants}
                initial="hidden"
                animate="visible"
                className="w-full h-full"
              >
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center 
                    w-full h-full p-8 
                    bg-nord-2 hover:bg-nord-3 border border-nord-3
                    hover:scale-[1.02] transition-all rounded-lg"
                >
                  <motion.div variants={childVariants}>{method.icon}</motion.div>
                  <motion.h3
                    variants={childVariants}
                    className="mt-2 text-xl font-semibold text-nord-8"
                  >
                    {method.title}
                  </motion.h3>
                  <motion.p
                    variants={childVariants}
                    className="text-base mt-1 text-nord-4"
                  >
                    {method.value}
                  </motion.p>
                </a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
