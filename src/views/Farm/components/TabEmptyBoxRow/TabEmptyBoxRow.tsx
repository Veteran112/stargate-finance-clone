import React from "react";

const TabEmptyBoxRow = () => {
  return (
    <div className="grid grid-cols-[repeat(4,1fr)] overflow-x-auto gap-[1.5rem] scrollbar_none">
      {[1, 2, 3, 4].map((e) => (
        <div
          className="min-w-[258px] min-h-[175px] rounded-[0.75rem] opacity-[0.4] border border-[#999]"
          key={e}
        ></div>
      ))}
    </div>
  );
};

export default TabEmptyBoxRow;
