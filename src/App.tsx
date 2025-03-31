import { Toaster } from "react-hot-toast";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Intro from "./components/Intro";
import SectionDivider from "./components/SectionDivider";
import Education from "./components/Education";
import Projects from "./components/ProjectList";
import SkillList from "./components/SkillList";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      {/* Blob 1 */}
      <div className="bg-nord-9/40 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] 2xl:right-[8rem] animate-float" />

      {/* Blob 2 */}
      <div
        className="bg-nord-15/30 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] 2xl:w-[75rem] animate-floatSlight"
        style={{ animationDelay: "-5s" }}
      />

      <Header />
      {/* Ensure main content is above blobs */}
      <main className="flex flex-col items-center mx-4 relative z-0">
        <Intro />
        <SectionDivider />
        <Education />
        <Projects />
        <SkillList />
        <Experiences />
        <Contact />
      </main>
      <Toaster position="top-right" />
      <Footer />
    </div>
  );
}
