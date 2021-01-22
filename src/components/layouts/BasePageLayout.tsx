/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ClearHistory } from '../ClearHistory';
import { ConditionalRollTable } from '../ConditionalRollTable';
import { ExportDataButton } from '../ExportDataButton';
import { FileUploadInput } from '../FileUploadInput';
import { GeneratorName } from '../GeneratorName';
import { HistoryList } from '../HistoryList';
import { LoadBasicExampleDataButton } from '../LoadBasicExampleDataButton';
import { BasicRollOnTableButton } from '../BasicRollOnTableButton';
import { BodyContainer } from '../shared/BodyContainer';
import { GridCell } from '../shared/GridCell';
import { Section } from '../shared/Section';
import { SubLayout } from '../shared/SubLayout';
import { Tab, TabSkeleton } from '../shared/TabSkeleton';
import { TableListLayout } from './TableListLayout';
import { TextTemplateLayout } from './TextTemplateLayout'
import { ConditionalRollOnTableButton } from '../ConditionalRollOnTableButton';
import { useMemo } from 'react';
import { LoadConditionalExampleDataButton } from '../LoadConditionalExampleDataButton';

const textTemplateLayoutStyles = css({
  gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRow: 1,
});

const pageLayout = css({
  gridTemplateColumns: `1fr 1fr`,
  gridTemplateRows: 'auto',
  columnGap: '1rem'
})

const tableGridLayout = css({
  gridTemplateColumns: `1fr`,
  gridTemplateRows: '65px auto',
});

const basicRollGridLayout = css({
  gridTemplateColumns: `1fr 1fr 1fr `,
  gridTemplateRows: 'auto auto 1fr auto',
})

const conditionalRollGridLayout = css({
  gridTemplateColumns: `1fr 1fr 1fr `,
  gridTemplateRows: 'auto auto auto 1fr auto',
})

const generatorNameStyles = css({
  width: '100%',
  fontSize: '30px',
  padding: '0 0 5px 0',
  margin: '36px 0 0 0',
  '&:hover,&:focus': {
    padding: '0 0 4px 0',
  },
  fontWeight: 'bold',
});

export const BasePageLayout: React.FC = () => {
  const tabs: Tab[] = useMemo(() => [{
    name: 'Basic Roll',
    component: (
      <SubLayout layout={basicRollGridLayout}>
        <TextTemplateLayout style={textTemplateLayoutStyles} />
        <GridCell position={{ row: 2, cstart: 1, cend: 3 }}><BasicRollOnTableButton /></GridCell>
        <GridCell
          position={{ cstart: 2, cend: 4, row: 2 }}
          styles={{ fontSize: '18px', margin: '1rem 0' }}
        >Table Roll Results:</GridCell>
        <GridCell position={{ cstart: 1, cend: 4, row: 3 }}><HistoryList /></GridCell>
        <GridCell position={{ col: 1, row: 4 }}><ExportDataButton /></GridCell>
        <GridCell position={{ col: 2, row: 4 }} styles={{ justifySelf: 'middle' }}><FileUploadInput /></GridCell>
        <GridCell position={{ col: 3, row: 4 }} styles={{ justifySelf: 'end' }}><ClearHistory /></GridCell>
        <GridCell position={{ col: 1, row: 5 }}><LoadBasicExampleDataButton /></GridCell>
      </SubLayout>)
  },
  {
    name: 'Conditional Roll',
    component: (
      <SubLayout layout={conditionalRollGridLayout}>
        <GridCell position={{ col: 1, row: 2, cstart: 1, cend: 4 }}><ConditionalRollTable /></GridCell>
        <GridCell position={{ row: 3, cstart: 1, cend: 3 }}><ConditionalRollOnTableButton /></GridCell>
        <GridCell
          position={{ cstart: 2, cend: 4, row: 3 }}
          styles={{ fontSize: '18px', margin: '1rem 0' }}
        >Conditional Roll Results:</GridCell>
        <GridCell position={{ cstart: 1, cend: 4, row: 4 }}><HistoryList /></GridCell>
        <GridCell position={{ col: 1, row: 5 }}><ExportDataButton /></GridCell>
        <GridCell position={{ col: 2, row: 5 }} styles={{ justifySelf: 'middle' }}><FileUploadInput /></GridCell>
        <GridCell position={{ col: 3, row: 5 }} styles={{ justifySelf: 'end' }}><ClearHistory /></GridCell>
        <GridCell position={{ col: 1, row: 6 }}><LoadConditionalExampleDataButton /></GridCell>
      </SubLayout>)
  },
], []);

  return (
    <BodyContainer>
      <Section layout={pageLayout}>
        <SubLayout layout={tableGridLayout}>
          <GridCell position={{ col: 1, row: 1 }} ><GeneratorName style={generatorNameStyles} /></GridCell>
          <GridCell position={{ col: 1, row: 2 }} ><TableListLayout /></GridCell>
        </SubLayout>
        <TabSkeleton initialTab={1} tabs={tabs} />
      </Section>
    </BodyContainer>
  );
}
