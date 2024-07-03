import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-3xl font-medium text-center capitalize drop-shadow-md ">
      {children}
    </h2>
  );
}
