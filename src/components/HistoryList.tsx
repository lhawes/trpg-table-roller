/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useContext } from 'react';
import { StateContext } from '../App';
import { getGeneratorHistory } from '../state/generator/generatorSelectors';
import { AppState } from '../state/rootInitialState';

const historyEntryStyles = css({
  display: 'block'
})

export const HistoryList: React.FC = () => {
  const state: AppState = useContext(StateContext);
  const historyEntries = getGeneratorHistory(state);
  return (
    <div>
      Table Roll Results:<br />
      { historyEntries
        .map((rollEntry: string, i: number) => (<span css={historyEntryStyles} key={i}>{ rollEntry }</span>))
        .reverse()
      }
    </div>
  );
};