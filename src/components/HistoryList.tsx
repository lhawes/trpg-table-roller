/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import React, { useContext } from 'react';
import { StateContext } from '../App';
import { getGeneratorHistory } from '../state/generator/generatorSelectors';
import { AppState } from '../state/rootInitialState';

const historyEntryStyle = css({
  display: 'block',
  margin: '0.5rem',
  fontStyle: 'italic',
});

export const HistoryList: React.FC = () => {
  const state: AppState = useContext(StateContext);
  const historyEntries = getGeneratorHistory(state);
  return (
    <div>
      { historyEntries
        .map((rollEntry: string, i: number) => (<span css={historyEntryStyle} key={i}>{ rollEntry }</span>))
        .reverse()
      }
    </div>
  );
};