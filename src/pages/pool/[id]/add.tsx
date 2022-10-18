import { useHeaderHeight } from "@atoms";
import AddPool from "@views/AddPool";
import React from "react";

const AddPoolPage = () => {
  const [headerHeight] = useHeaderHeight();
  return (
    <div style={{ marginTop: headerHeight + 50 }}>
      <AddPool />
    </div>
  );
};

export default AddPoolPage;
