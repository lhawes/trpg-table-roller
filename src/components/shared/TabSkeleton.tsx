import React from "react";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { SubLayout } from "./SubLayout";

interface Tab {
  component: React.ReactNode;
  name: string;
}

interface TabSkeletonProps {
  tabs: Tab[];
  initialTab?: number;
}

export const TabSkeleton: React.FC<TabSkeletonProps> = ({ tabs, initialTab = 0 }) => {
  const [tabIndex, setTabIndex] = useState(initialTab);

  return (
    <React.Fragment>
      <SubLayout>
        <div>{ tabs.map((tab: Tab, index) => {
          if (index === tabIndex) {
            return (<SecondaryButton onClick={() => setTabIndex(index)} >
              { tab.name}
            </SecondaryButton>);
          }
          return (<PrimaryButton onClick={() => setTabIndex(index)} >
              { tab.name }
            </PrimaryButton>);
          }) }</div>
        { tabs[tabIndex].component }
      </SubLayout>
    </React.Fragment>
  );
}