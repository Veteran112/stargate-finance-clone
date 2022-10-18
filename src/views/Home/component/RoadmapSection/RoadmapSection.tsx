import { roadmapBlocks } from "@config/constants";
import React from "react";
import RoadmapBlock from "./components/RoadmapBlock";

const RoadmapSection = () => {
  return (
    <section className="my-[90px] lg:my-[155px]">
      <div className="container space-y-[120px] lg:space-y-[190px]">
        {roadmapBlocks.map((block, i) => (
          <RoadmapBlock {...block} key={i} />
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;
