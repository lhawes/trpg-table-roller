import React from "react";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { SubLayout } from "./SubLayout";

interface TabSkeletonProps {
  components: React.ReactNode[]
}

export const TabSkeleton: React.FC<TabSkeletonProps> = ({ components }) => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <React.Fragment>
      <SubLayout>
        <div>{ components.map((_component, index) => (
          <PrimaryButton onClick={() => setTabIndex(index)} >
            Tab { index }
          </PrimaryButton>
        )) }</div>
        { components[tabIndex] }
      </SubLayout>
    </React.Fragment>
  );
}