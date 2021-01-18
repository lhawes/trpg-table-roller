/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ClearHistory } from '../ClearHistory';
import { ConditionalRollTable } from '../ConditionalRollTable';
import { ExportDataButton } from '../ExportDataButton';
import { FileUploadInput } from '../FileUploadInput';
import { GeneratorName } from '../GeneratorName';
import { HistoryList } from '../HistoryList';
import { LoadExampleDataButton } from '../LoadExampleDataButton';
import { RollOnTableButton } from '../RollOnTableButton';
import { BodyContainer } from '../shared/BodyContainer';
import { GridCell } from '../shared/GridCell';
import { Section } from '../shared/Section';
import { SubLayout } from '../shared/SubLayout';
import { TabSkeleton } from '../shared/TabSkeleton';
import { TableListLayout } from './TableListLayout';
import { TextTemplateLayout } from './TextTemplateLayout'

const textTemplateLayoutStyles = css({
  gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRow: 1,
});

const pageLayout = css({
  gridTemplateColumns: `1fr 1fr`,
  gridTemplateRows: 'auto',
  columnGap: '12px'
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
  gridTemplateRows: 'auto auto 1fr auto',
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
  return (
    <BodyContainer>
      <Section layout={pageLayout}>
        <SubLayout layout={tableGridLayout}>
          <GridCell position={{ col: 1, row: 1 }} ><GeneratorName style={generatorNameStyles} /></GridCell>
          <GridCell position={{ col: 1, row: 2 }} ><TableListLayout /></GridCell>
        </SubLayout>
        <TabSkeleton components={[
          <SubLayout layout={basicRollGridLayout}>
            <TextTemplateLayout style={textTemplateLayoutStyles} />
            <GridCell position={{ row: 2, start: 1, end: 3 }}><RollOnTableButton /></GridCell>
            <GridCell
              position={{ start: 2, end: 4, row: 2 }}
              styles={{ fontSize: '18px', margin: '16px 0' }}
            >Table Roll Results:</GridCell>
            <GridCell position={{ start: 1, end: 4, row: 3 }}><HistoryList /></GridCell>
            <GridCell position={{ col: 1, row: 4 }}><ExportDataButton /></GridCell>
            <GridCell position={{ col: 2, row: 4 }} styles={{ justifySelf: 'middle' }}><FileUploadInput /></GridCell>
            <GridCell position={{ col: 3, row: 4 }} styles={{ justifySelf: 'end' }}><ClearHistory /></GridCell>
            <GridCell position={{ col: 1, row: 5 }}><LoadExampleDataButton /></GridCell>
          </SubLayout>,
          <SubLayout layout={conditionalRollGridLayout}>
            {/* <TextTemplateLayout style={textTemplateLayoutStyles} /> */}
            <GridCell position={{ col: 1, row: 2 }}><ConditionalRollTable /></GridCell>
            <GridCell position={{ row: 3, start: 1, end: 3 }}><RollOnTableButton /></GridCell>
            <GridCell
              position={{ start: 2, end: 4, row: 3 }}
              styles={{ fontSize: '18px', margin: '16px 0' }}
            >Conditional Roll Results:</GridCell>
            <GridCell position={{ start: 1, end: 4, row: 4 }}><HistoryList /></GridCell>
            <GridCell position={{ col: 1, row: 5 }}><ExportDataButton /></GridCell>
            <GridCell position={{ col: 2, row: 5 }} styles={{ justifySelf: 'middle' }}><FileUploadInput /></GridCell>
            <GridCell position={{ col: 3, row: 5 }} styles={{ justifySelf: 'end' }}><ClearHistory /></GridCell>
            <GridCell position={{ col: 1, row: 6 }}><LoadExampleDataButton /></GridCell>
          </SubLayout>
        ]} />
      </Section>
    </BodyContainer>
  );
}
