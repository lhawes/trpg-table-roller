/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from "react";
import { SubLayout } from "./shared/SubLayout";
import { UserInput } from "./shared/UserInput";

// table index, roll results, next table index
const conditionalRowStyle = css({

})

export const ConditionalRollTableRow: React.FC = ({ }) => {
  return (
    <SubLayout css={conditionalRowStyle}>
      <span>Table Index</span>
      <span>Roll Indexes</span>
      <span>Next Table Index</span>
      <UserInput value={''} onChange={() => true} />
      <UserInput value={''} onChange={() => true} />
      <UserInput value={''} onChange={() => true} />
    </SubLayout>
  );
}