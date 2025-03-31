import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionStore } from "../stores/useActiveSectionStore";

export const useSectionInView = (sectionName: string, threshold = 0.75) => {
  const { ref, inView } = useInView({ threshold });

  const { setActiveSection, timeOfLastClick } = useActiveSectionStore();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      console.log("set", sectionName);
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
};
