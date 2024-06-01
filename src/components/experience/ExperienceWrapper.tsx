import React from "react";
import CompaniesBar from "./CompaniesBar";
import GoCareers from "./GoCareers";
import Epoch from "./Epoch";
import PW from "./PW";

interface Props {}

const ExperienceWrapper = (props: Props) => {
  const barRef = React.useRef<HTMLDivElement>(null);

  const GetDescription = () => {
    switch (DescriptionJob) {
      case "GoCareers":
        return <GoCareers />;
      case "Epoch":
        return <Epoch />;
      case "PhysicsWallah":
        return <PW />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("GoCareers");
  return (
    <section
      className="flex w-full flex-col items-center justify-center space-y-4
      overflow-hidden lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-20 xl:space-x-6"
    >
      {/* Left side of Where I've Worked, contains the bar and name of companies */}
      <CompaniesBar setDescriptionJob={setDescriptionJob} />
      {/* Description for The job */}
      <div className="w-full flex-1 px-2">{GetDescription()}</div>
    </section>
  );
};

export default ExperienceWrapper;
