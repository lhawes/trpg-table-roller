/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useCallback, useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { SubLayout } from "./SubLayout";

export interface Tab {
  component: React.ReactNode;
  name: string;
}

interface TabSkeletonProps {
  tabs: Tab[];
  initialTab?: number;
}

const tabLayoutStyle = css({
  gridTemplateColumns: `1fr`,
  gridTemplateRows: '63px auto',
});

const tabHeaderStyle = css({
  display: 'grid',
  columnGap: '1rem',
});

export const TabSkeleton: React.FC<TabSkeletonProps> = ({ tabs, initialTab = 0 }) => {
  const [tabIndex, setTabIndex] = useState(initialTab);

  const getButtonGridPositionStyle = useCallback((index: number) => css({
    gridRow: 1,
    gridColumn: index + 1
  }), [])

  return (
    <SubLayout layout={tabLayoutStyle}>
        <div css={tabHeaderStyle}>{ tabs.map((tab: Tab, index) => {
          const style = getButtonGridPositionStyle(index);
          if (index === tabIndex) {
            return (<PrimaryButton style={style} onClick={() => setTabIndex(index)} >
              { tab.name}
            </PrimaryButton>);
          }
          return (<SecondaryButton style={style} onClick={() => setTabIndex(index)} >
              { tab.name }
          </SecondaryButton>);
          }) }
        </div>
        { tabs[tabIndex].component }
      </SubLayout>
  );
}