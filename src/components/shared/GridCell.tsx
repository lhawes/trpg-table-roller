/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useMemo } from "react";


interface GridCellProps {
  position?: {
    col?: number;
    row?: number;
    start?: number;
    end?: number;
  }
  styles?: Record<string, any>;
}

export const GridCell: React.FC<GridCellProps> = ({ styles, position = {}, children }) => {
  const gridStyle = useMemo(() => css({
    gridColumn: position.col,
    gridRow: position.row,
    gridColumnStart: position.start,
    gridColumnEnd: position.end,
    ...styles,
  }), [styles, position, children]);
  return (<div css={gridStyle}>{ children }</div>);
}
