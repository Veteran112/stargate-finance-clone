import { RoadmapBlockProps } from "@config/types";
import { cx } from "@utils";
import Image from "next/image";
import React from "react";
import RoadmapProgressBar from "../RoadmapProgressBar";

const RoadmapBlock = ({
  img,
  labelText,
  progressPercentage,
  subtitle,
  title,
  layout,
}: RoadmapBlockProps) => {
  const isReversed = layout === "reverse";
  return (
    <div
      className={cx(
        "flex items-start lg:justify-between lg:items-center flex-col-reverse gap-y-6 relative",
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row",
      )}
    >
      {/* <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[85%] w-px bg-white/50"></div> */}
      <div className="max-w-[470px]">
        <RoadmapProgressBar progressPercentage={progressPercentage} />
        <h5 className="mt-5 mb-1.5 text-base">{labelText}</h5>
        <h3 className="text-[20px] leading-[30px] font-semibold text-primary">
          {title}
        </h3>
        <p className="__body_text mt-2">{subtitle}</p>
      </div>
      <div className="[&>span]:!block max-w-[460px]">
        <Image {...img} alt={labelText} />
      </div>
    </div>
  );
};

export default RoadmapBlock;
