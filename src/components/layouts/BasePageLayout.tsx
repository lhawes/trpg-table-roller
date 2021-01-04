/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ClearHistory } from '../ClearHistory';
import { ExportDataButton } from '../ExportDataButton';
import { FileUploadInput } from '../FileUploadInput';
import { GeneratorName } from '../GeneratorName';
import { HistoryList } from '../HistoryList';
import { LoadExampleDataButton } from '../LoadExampleDataButton';
import { RollOnTableButton } from '../RollOnTableButton';
import { BodyContainer } from '../shared/BodyContainer';
import { Section } from '../shared/Section';
import { SubLayout } from '../shared/SubLayout';
import { TableListLayout } from './TableListLayout';
import { TextTemplateLayout } from './TextTemplateLayout'

const generatorNameLayout = css({
  gridColumn: 1,
  gridRow: 1,
});
const tableListSectionLayout = css({
  gridColumn: 1,
  gridRow: 2,
});
const textTemplateLayoutStyles = css({
  gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRow: 1,
});
const rollOnTableButtonLayout = css({
  gridColumnStart: 1,
  gridColumnEnd: 3,
  gridRow: 2,
});
const rollResultLayout = css({
  gridColumnStart: 2,
  gridColumnEnd: 4,
  gridRow: 2,
  fontSize: '18px',
  margin: '16px 0',
})
const historyListLayout = css({
  gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRow: 3,
});
const exportDataButtonLayout = css({
  gridColumn: 1,
  gridRow: 4,
});
const fileUploadInputLayout = css({
  gridColumn: 2,
  gridRow: 4,
  justifySelf: 'middle'
});
const clearHistoryLayout = css({
  gridColumn: 3,
  gridRow: 4,
  justifySelf: 'end'
});
const loadExampleDataLayout = css({
  gridColumn: 1,
  gridRow: 5,
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

const resultGridLayout = css({
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
        <div css={generatorNameLayout}><GeneratorName style={generatorNameStyles}/></div>
        <div css={tableListSectionLayout}><TableListLayout /></div>
        </SubLayout>
        <SubLayout layout={resultGridLayout}>
        <TextTemplateLayout style={textTemplateLayoutStyles} />
        <div css={rollOnTableButtonLayout}><RollOnTableButton /></div>
        <div css={rollResultLayout}>Table Roll Results:</div>
        <div css={historyListLayout}><HistoryList /></div>
        <div css={exportDataButtonLayout}><ExportDataButton /></div>
        <div css={fileUploadInputLayout}><FileUploadInput /></div>
        <div css={clearHistoryLayout}><ClearHistory /></div>
          <div css={loadExampleDataLayout}><LoadExampleDataButton /></div>
        </SubLayout>
      </Section>
    </BodyContainer>
  );
}
