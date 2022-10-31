/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMemo } from "react";


interface GridCellProps {
  position?: {
    col?: number;
    row?: number;
    cstart?: number;
    cend?: number;
    rstart?: number;
    rend?: number;
  }
  styles?: Record<string, any>;
}

export const GridCell: React.FC<GridCellProps> = ({ styles, position = {}, children }) => {
  const gridStyle = useMemo(() => css({
    gridColumn: position.col,
    gridRow: position.row,
    gridColumnStart: position.cstart,
    gridColumnEnd: position.cend,
    gridRowStart: position.rstart,
    gridRowEnd: position.rend,
    ...styles,
  }), [styles, position, children]);
  return (<div css={gridStyle}>{ children }</div>);
}
