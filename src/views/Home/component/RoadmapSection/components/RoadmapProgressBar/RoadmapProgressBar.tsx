import React from "react";

const RoadmapProgressBar = ({
  progressPercentage,
}: {
  progressPercentage: number;
}) => {
  return (
    <div className="max-w-[420px] bg-[#3C344B] rounded-full h-1.5 overflow-hidden">
      <div
        style={{ width: `${progressPercentage}%` }}
        className="h-full bg-primary rounded-full"
      ></div>
    </div>
  );
};

export default RoadmapProgressBar;
