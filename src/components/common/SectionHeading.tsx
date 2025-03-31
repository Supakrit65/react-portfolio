import React from "react";

interface SectionHeadingProps {
  children?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h2 className="text-3xl text-center font-medium capitalize mb-8">
      {children}
    </h2>
  );
};

export default SectionHeading;
